/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/eBNwXlmoHQm
 */
import {
	CardDescription,
	CardTitle,
	CardHeader,
	CardContent,
	Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ResponsiveBar } from "@nivo/bar";
import { ClassAttributes, HTMLAttributes, JSX, SVGProps } from "react";

export function OverviewInvest() {
	return (
		<Card>
			<CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-4">
				<div className="flex flex-col">
					<CardDescription>Total Value</CardDescription>
					<CardTitle>$9,345.67</CardTitle>
				</div>
				<div className="flex flex-col">
					<CardDescription>Change</CardDescription>
					<CardTitle className="text-sm">+2.4%</CardTitle>
				</div>
				<Button size="sm" variant="outline">
					Deposit
				</Button>
			</CardHeader>
			<CardContent className="flex items-start gap-4">
				<div className="grid gap-1 text-sm">
					<p className="flex items-center gap-2">
						<SquareIcon className="h-4 w-4 text-green-500" />
						Stocks
						<span className="ml-auto font-semibold">40%</span>
					</p>
					<p className="flex items-center gap-2">
						<SquareIcon className="h-4 w-4 text-blue-500" />
						Real Estate
						<span className="ml-auto font-semibold">20%</span>
					</p>
					<p className="flex items-center gap-2">
						<SquareIcon className="h-4 w-4 text-yellow-500" />
						Savings
						<span className="ml-auto font-semibold">25%</span>
					</p>
					<p className="flex items-center gap-2">
						<SquareIcon className="h-4 w-4 text-purple-500" />
						Others
						<span className="ml-auto font-semibold">15%</span>
					</p>
				</div>
				<div className="ml-auto w-[200px]">
					<BarChart className="aspect-[1/1]" />
				</div>
			</CardContent>
		</Card>
	);
}

function SquareIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect width="18" height="18" x="3" y="3" rx="2" />
		</svg>
	);
}

function BarChart(
	props: JSX.IntrinsicAttributes &
		ClassAttributes<HTMLDivElement> &
		HTMLAttributes<HTMLDivElement>
) {
	return (
		<div {...props}>
			<ResponsiveBar
				data={[
					{ name: "Jan", count: 111 },
					{ name: "Feb", count: 157 },
					{ name: "Mar", count: 129 },
					{ name: "Apr", count: 150 },
					{ name: "May", count: 119 },
					{ name: "Jun", count: 72 },
				]}
				keys={["count"]}
				indexBy="name"
				margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
				padding={0.3}
				colors={["#2563eb"]}
				axisBottom={{
					tickSize: 0,
					tickPadding: 16,
				}}
				axisLeft={{
					tickSize: 0,
					tickValues: 4,
					tickPadding: 16,
				}}
				gridYValues={4}
				theme={{
					tooltip: {
						chip: {
							borderRadius: "9999px",
						},
						container: {
							fontSize: "12px",
							textTransform: "capitalize",
							borderRadius: "6px",
						},
					},
					grid: {
						line: {
							stroke: "#f3f4f6",
						},
					},
				}}
				tooltipLabel={({ id }) => `${id}`}
				enableLabel={false}
				role="application"
				ariaLabel="A bar chart showing data"
			/>
		</div>
	);
}
