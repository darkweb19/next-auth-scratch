import IncomeCard from "./IncomeCard";
import ExpensesCard from "./ExpensesCard";
import SalesCards from "./SalesCard";
import AssestsCard from "./AssestsCard";
import TransactionCard from "./TransactionCards";

export function Dashboard() {
	return (
		<div className="flex min-h-screen w-full flex-col">
			<main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
				<div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
					<IncomeCard />
					<ExpensesCard />
					<SalesCards />

					<AssestsCard />
				</div>
				<TransactionCard />
			</main>
		</div>
	);
}
