import { Cards } from "@/utils/interfaces";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Button,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

export default function BankCard() {
	const [cards, setCards] = useState<Cards[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// Fetch card data from backend
		const fetchCard = async () => {
			try {
				const response = await axios.get("/api/finance/card");
				setCards(response.data.cards);
			} catch (error) {
				console.error("Error fetching card data:", error);
			}
		};
		fetchCard();
	}, []);

	// Function to handle card removal
	const handleRemoveCard = async (id: string) => {
		try {
			setLoading(true);
			// Send a request to remove the card from the backend
			await axios.delete(`/api/finance/card/${id}`);
			// Update the local state to remove the card
			console.log("Card removed");
			// Re-fetch the card data after deletion
			const response = await axios.get("/api/finance/card");
			setCards(response.data.cards);
		} catch (error) {
			console.error("Error removing card:", error);
		}
	};

	return (
		<div>
			{cards &&
				cards.map((card) => (
					<Card key={card.id} className="max-w-[340px] m-2">
						<CardHeader className="justify-between">
							{card.card_type}
							<Button
								color="danger"
								size="sm"
								isLoading={loading}
								onClick={() =>
									handleRemoveCard(String(card.card_number))
								}
							>
								<span className="text-xl">
									<MdDeleteOutline />
								</span>
							</Button>
						</CardHeader>
						<CardBody className="px-3 py-0 text-small text-default-400">
							<span className="pt-2">{card.card_name}</span>
						</CardBody>
						<CardFooter className="gap-3">
							<div className="flex gap-1">
								<p className="font-semibold text-default-400 text-small">
									{card.card_number}
								</p>
							</div>
							<div className="flex gap-1">
								<p className="font-semibold text-default-400 text-small">
									Expiry date: {card.expiryDate}
								</p>
							</div>
						</CardFooter>
					</Card>
				))}
		</div>
	);
}
