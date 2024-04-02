import { Cards } from "@/utils/interfaces";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function BankCard() {
  const [cards, setCards] = useState<Cards[]>([]);

  useEffect(() => {
    // Fetch card data from backend
    const fetchCard = async () => {
      const card = await axios.get("/api/finance/card");
      setCards(card.data.cards);
    };
    fetchCard();
  }, []);

  return (
    <div>
      {cards.map((card) => (
        <Card key={card.id} className="max-w-[340px] m-2">
          <CardHeader className="justify-between">{card.card_type}</CardHeader>
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
