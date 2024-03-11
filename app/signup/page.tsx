"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
	const router = useRouter();
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
		try {
			setLoading(true);
			e.preventDefault();
			// Add your signup logic here, using formData
			console.log("Form submitted with data:", formData);
			const response = await axios.post("/api/user/signup", formData);
			console.log(response.data.success);

			// Reset form after submission

			if (response.data.success) {
				setLoading(false);
			}
			router.push("/login");
		} catch (err: any) {
			console.log(err.message);
		} finally {
			setFormData({
				username: "",
				email: "",
				password: "",
			});
			setLoading(false);
		}
	};

	return (
		<div className="h-screen w-full flex items-center">
			<form
				className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
				onSubmit={handleSubmit}
			>
				<label className="block mb-2 text-sm text-gray-600">
					Username:
					<input
						className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
						type="text"
						name="username"
						value={formData.username}
						onChange={handleChange}
						required
					/>
				</label>

				<label className="block mb-2 text-sm text-gray-600">
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

				<label className="block mb-2 text-sm text-gray-600">
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

				<button
					className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
					type="submit"
				>
					{loading ? "adding..." : "signup"}
				</button>
			</form>
		</div>
	);
}
