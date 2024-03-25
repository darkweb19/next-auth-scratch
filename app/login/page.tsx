"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";

export default function LoginPage() {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			setLoading(true);
			const response = await axios.post("/api/user/login", formData);
			if (response.data.success) {
				toast.success("Login Success");
				router.push("/dashboard");
			}
		} catch (error: any) {
			console.log("Error logging in");
		} finally {
			// Reset form after submission
			setFormData({
				email: "",
				password: "",
			});
			setLoading(false);
		}
	};

	return (
		<div className="h-full flex items-center justify-center">
			<form
				className="max-w-md p-6 bg-white shadow-md rounded-md"
				onSubmit={handleSubmit}
			>
				<h2 className="text-2xl font-semibold mb-6">Login</h2>

				<Label>
					Email:
					<Input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</Label>

				<Label>
					Password:
					<Input
						type="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						required
					/>
				</Label>
				<br />

				{/* Button with loading spinner */}
				<Button type="submit" disabled={loading}>
					{loading ? "Logging..." : "Log in"}
				</Button>
			</form>
		</div>
	);
}
