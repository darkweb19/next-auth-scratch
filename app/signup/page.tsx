"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignupFormData } from "@/utils/interfaces";

export default function SignUpForm() {
	const router = useRouter();
	const [formData, setFormData] = useState<SignupFormData>({
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

			const response = await axios.post("/api/user/signup", formData);

			if (response.data.success) {
				router.push("/login");
				toast.success("Signed Up Success");
			} else {
				toast.error(response.data.message);
			}
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
		<div className="min-h-full  w-full p-3 flex items-center">
			<form
				className="max-w-md mx-auto p-10 shadow-md rounded-md"
				onSubmit={handleSubmit}
			>
				<h1 className="text-2xl font-medium py-2">Create an Account</h1>
				<Label>
					Username:
					<Input
						type="text"
						name="username"
						value={formData.username}
						onChange={handleChange}
						required
					/>
				</Label>

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

				<Button type="submit">
					{loading ? (
						<div className="flex justify-center items-center mt-10">
							<div className="w-6 h-6 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
						</div>
					) : (
						"signup"
					)}
				</Button>
				<p className="mt-4 text-center text-sm">
					Already have an account?{" "}
					<a href="/login" className="text-blue-500 hover:underline">
						Login here
					</a>
				</p>
			</form>
		</div>
	);
}
