import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Activity } from "lucide-react";

const AssestsCard: React.FC = () => {
	return (
		<Card x-chunk="dashboard-01-chunk-3">
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-sm font-medium">Assets</CardTitle>
				<Activity className="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent>
				<div className="text-2xl font-bold">+73</div>
				<p className="text-xs text-muted-foreground">
					+20 since last Year
				</p>
			</CardContent>
		</Card>
	);
};

export default AssestsCard;
