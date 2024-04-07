import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Users } from "lucide-react";

const ExpensesCard: React.FC = () => {
	return (
		<Card x-chunk="dashboard-01-chunk-1">
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-sm font-medium">Expenses</CardTitle>
				<Users className="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent>
				<div className="text-2xl font-bold">+2350</div>
				<p className="text-xs text-muted-foreground">
					+180.1% from last month
				</p>
			</CardContent>
		</Card>
	);
};

export default ExpensesCard;
