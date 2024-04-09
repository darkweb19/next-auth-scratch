import { AnalyticsPage } from "@/components/analytics-page";

export default function AdminPage() {
	return (
		<div className="w-full p-4">
			<h1 className="text-xl font-bold tracking-tighter sm:text-2xl ">
				Technical Analysis
			</h1>
			<p className="mb-4 p-1 text-gray-500">
				Visually track and manage your finances.
			</p>
			<AnalyticsPage />
		</div>
	);
}
