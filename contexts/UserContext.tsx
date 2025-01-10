"use client";
import { getLoggedInUser } from "@/lib/getUser";
import { User } from "@prisma/client";
import React, { createContext, useContext, useState, useEffect } from "react";

interface UserContextProps {
	user: User | null;
	loading: boolean;
	refreshUser: () => Promise<void>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	const fetchUser = async () => {
		try {
			const loggedInUser = await getLoggedInUser();
			if (loggedInUser !== "token exp") {
				setUser(loggedInUser as User);
			} else {
				setUser(null);
			}
		} catch (error) {
			console.error("Failed to fetch user:", error);
			setUser(null);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchUser();
	}, [user]);

	const refreshUser = async () => {
		setLoading(true);
		await fetchUser();
	};

	return (
		<UserContext.Provider value={{ user, loading, refreshUser }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error("useUser must be used within a UserProvider");
	}
	return context;
};
