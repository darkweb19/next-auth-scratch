import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
} from "@nextui-org/react";
import { MdAddCircle } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

import axios from "axios";
import toast from "react-hot-toast";

export default function AddCardModal() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [cardFormData, setCardFormData] = useState({
		cardName: "",
		cardNumber: "",
		cardType: "",
		bankName: "",
		expiryDate: "",
	});

	const handleCardFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setCardFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleCardFormSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		try {
			// Send a POST request to your backend API endpoint
			const response = await axios.post(
				"/api/finance/card",
				cardFormData
			);
			console.log("Response from server:", response.data.success);
			if (response.data.success) {
				toast.success("Card added successfully");
			} else {
				toast.error(`Error adding card : ${response.data.message}`);
			}
			// Optionally, close the modal after successful submission
			onClose();
		} catch (error) {
			console.error("Error submitting form:", error);
			// Handle error accordingly, display a message to the user, etc.
		} finally {
			setCardFormData({
				cardName: "",
				cardNumber: "",
				cardType: "",
				bankName: "",
				expiryDate: "",
			});
		}
	};

	return (
		<>
			<div className="flex gap-2 align-center text-center justify-around">
				<h1 className="text-lg font-medium">My Cards</h1>
				<span className="text-xl">
					<div className="flex flex-wrap gap-3"></div>
					<Button className="w-fit" onClick={onOpen}>
						<MdAddCircle />
					</Button>
				</span>
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalContent>
						<ModalHeader className="flex flex-col gap-1">
							Fill the form
						</ModalHeader>
						<ModalBody>
							<form onSubmit={handleCardFormSubmit}>
								<Label>
									Name:
									<Input
										type="text"
										name="cardName"
										value={cardFormData.cardName}
										onChange={handleCardFormChange}
										required
									/>
								</Label>
								<Label>
									Bank Name:
									<Input
										type="text"
										name="bankName"
										value={cardFormData.bankName}
										onChange={handleCardFormChange}
										required
									/>
								</Label>
								<Label>
									Card Number:
									<Input
										type="Number"
										name="cardNumber"
										value={cardFormData.cardNumber}
										onChange={handleCardFormChange}
										required
									/>
								</Label>
								<Label>
									Card Type:
									<Input
										type="text"
										name="cardType"
										value={cardFormData.cardType}
										onChange={handleCardFormChange}
										required
									/>
								</Label>
								<Label>
									Expiry Date:
									<Input
										type="string"
										name="expiryDate"
										value={cardFormData.expiryDate}
										onChange={handleCardFormChange}
										required
									/>
								</Label>
								<br />
								<Button type="submit">Submit</Button>
							</form>
						</ModalBody>
						<ModalFooter>
							<Button
								color="danger"
								variant="light"
								onClick={onClose}
							>
								Close
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</div>
		</>
	);
}
