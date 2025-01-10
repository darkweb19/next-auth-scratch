// app/providers.tsx
"use client";
import { UserProvider } from "@/contexts/UserContext";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<NextUIProvider>
			<UserProvider>{children}</UserProvider>
		</NextUIProvider>
	);
}
