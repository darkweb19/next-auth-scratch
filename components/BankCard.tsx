"use client";
import { Cards } from "@/utils/interfaces";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Button,
} from "@nextui-org/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdDeleteOutline } from "react-icons/md";
import useSWR from "swr";

export default function BankCard() {
	const fetcher = async (url: string) => {
		const response = await fetch(url, { cache: "no-store" });
		return await response.json();
	};
	const { data: cards, error, mutate } = useSWR("/api/finance/card", fetcher);

	const [loadingIds, setLoadingIds] = useState<string[]>([]);

	const handleRemoveCard = async (id: string) => {
		try {
			setLoadingIds([...loadingIds, id]);
			// Send a request to remove the card from the backend
			await fetch(`/api/finance/card/${id}`, { method: "DELETE" });
			toast.success("Card Deleted.");
			// Trigger a re-fetch of the card data
			mutate();
		} catch (error) {
			console.error("Error removing card:", error);
		} finally {
			// Remove the card ID from loadingIds array after deletion
			setLoadingIds(loadingIds.filter((loadingId) => loadingId !== id));
		}
	};

	if (error) return <div>Error fetching data {error}</div>;

	if (cards && cards.cards.length === 0)
		return <div className="text-red-700">No cards found</div>;

	if (!cards)
		return (
			<div className="flex justify-center items-center mt-10">
				<div className="w-6 h-6 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
			</div>
		);

	return (
		<div>
			{cards &&
				cards.cards &&
				cards?.cards.map((card: Cards) => (
					<Card key={card.id} className="max-w-[340px] m-2">
						<CardHeader className="justify-between">
							{card.card_type}
							<Button
								color="danger"
								size="sm"
								isLoading={loadingIds.includes(
									String(card.card_number)
								)}
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
							<div className="flex gap-1 mt-1">
								<p className="font-semibold text-default-400 text-small">
									{card.card_number}
								</p>
							</div>
						</CardBody>
						<CardFooter className="gap-3">
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
