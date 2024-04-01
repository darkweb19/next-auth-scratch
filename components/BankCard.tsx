import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

export default function BankCard() {
	return (
		<Card className="max-w-[340px]">
			<CardHeader className="justify-between">VISA</CardHeader>
			<CardBody className="px-3 py-0 text-small text-default-400">
				<span className="pt-2">Card Name</span>
			</CardBody>
			<CardFooter className="gap-3">
				<div className="flex gap-1">
					<p className="font-semibold text-default-400 text-small">
						Card Number
					</p>
				</div>
				<div className="flex gap-1">
					<p className="font-semibold text-default-400 text-small">
						Expiry date
					</p>
				</div>
			</CardFooter>
		</Card>
	);
}
