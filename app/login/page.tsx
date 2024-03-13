"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

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
		<div className="min-h-screen flex items-center justify-center">
			<form
				className="max-w-md p-6 bg-white shadow-md rounded-md"
				onSubmit={handleSubmit}
			>
				<h2 className="text-2xl font-semibold mb-6">Login</h2>

				<label className="block mb-4 text-sm text-gray-600">
					Email:
					<input
						className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</label>

				<label className="block mb-4 text-sm text-gray-600">
					Password:
					<input
						className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
						type="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						required
					/>
				</label>

				{/* Button with loading spinner */}
				<button
					className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 relative"
					type="submit"
					disabled={loading}
				>
					{loading ? "Logging..." : "Log in"}
				</button>
			</form>
		</div>
	);
}
