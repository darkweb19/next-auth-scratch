"use client";

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/95ol1eEccFG
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
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBump } from "@nivo/bump";
import { ClassAttributes, HTMLAttributes, JSX, SVGProps } from "react";

export function AnalyticsPage() {
	return (
		<div className="grid gap-4 lg:grid-cols-2">
			<Card>
				<CardHeader className="flex items-center gap-4">
					<div className="flex flex-col">
						<CardDescription className="text-xl font-medium">
							Assets
						</CardDescription>
						<CardTitle>$10909.00</CardTitle>
					</div>
					<Button
						className="ml-auto h-8 w-8"
						size="icon"
						variant="outline"
					>
						<MoreHorizontalIcon className="h-4 w-4" />
						<span className="sr-only">Toggle options</span>
					</Button>
				</CardHeader>
				<CardContent className="flex items-center justify-center h-[200px]">
					<BarChart className="h-[200px] aspect-video" />
				</CardContent>
			</Card>
			<Card>
				<CardHeader className="flex items-center gap-4">
					<div className="flex flex-col">
						<CardDescription className="text-xl font-medium">
							Income
						</CardDescription>
						<CardTitle>$4803.00</CardTitle>
					</div>
					<Button
						className="ml-auto h-8 w-8"
						size="icon"
						variant="outline"
					>
						<MoreHorizontalIcon className="h-4 w-4" />
						<span className="sr-only">Toggle options</span>
					</Button>
				</CardHeader>
				<CardContent className="flex items-center justify-center h-[200px]">
					<PieChart className="h-[200px] aspect-video" />
				</CardContent>
			</Card>
			<Card>
				<CardHeader className="flex items-center gap-4">
					<div className="flex flex-col">
						<CardDescription className="text-xl font-medium">
							Expenses
						</CardDescription>
						<CardTitle>$2389.00</CardTitle>
					</div>
					<Button
						className="ml-auto h-8 w-8"
						size="icon"
						variant="outline"
					>
						<MoreHorizontalIcon className="h-4 w-4" />
						<span className="sr-only">Toggle options</span>
					</Button>
				</CardHeader>
				<CardContent className="flex items-center justify-center h-[200px]">
					<InnerPieChart className="h-[200px] aspect-video" />
				</CardContent>
			</Card>
			<Card>
				<CardHeader className="flex items-center gap-4">
					<div className="flex flex-col">
						<CardDescription className="text-xl font-medium">
							Liabilities
						</CardDescription>
						<CardTitle>$89.00</CardTitle>
					</div>
					<Button
						className="ml-auto h-8 w-8"
						size="icon"
						variant="outline"
					>
						<MoreHorizontalIcon className="h-4 w-4" />
						<span className="sr-only">Toggle options</span>
					</Button>
				</CardHeader>
				<CardContent className="flex items-center justify-center h-[200px]">
					<BarChart className="h-[200px] aspect-video" />
				</CardContent>
			</Card>

			<Card>
				<CardHeader className="flex items-center gap-4">
					<div className="flex flex-col">
						<CardDescription className="text-xl font-medium">
							Other Investments
						</CardDescription>
						<CardTitle>$331.00</CardTitle>
					</div>
					<Button
						className="ml-auto h-8 w-8"
						size="icon"
						variant="outline"
					>
						<MoreHorizontalIcon className="h-4 w-4" />
						<span className="sr-only">Toggle options</span>
					</Button>
				</CardHeader>
				<CardContent className="flex items-center justify-center h-[200px]">
					<BumpChart className="h-[200px] aspect-video " />
				</CardContent>
			</Card>
		</div>
	);
}

function MoreHorizontalIcon(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
			<circle cx="12" cy="12" r="1" />
			<circle cx="19" cy="12" r="1" />
			<circle cx="5" cy="12" r="1" />
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

function PieChart(
	props: JSX.IntrinsicAttributes &
		ClassAttributes<HTMLDivElement> &
		HTMLAttributes<HTMLDivElement>
) {
	return (
		<div {...props}>
			<ResponsivePie
				data={[
					{ id: "Jan", value: 111 },
					{ id: "Feb", value: 157 },
					{ id: "Mar", value: 129 },
					{ id: "Apr", value: 150 },
					{ id: "May", value: 119 },
					{ id: "Jun", value: 72 },
				]}
				sortByValue
				margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
				cornerRadius={0}
				padAngle={0}
				borderWidth={1}
				borderColor={"#ffffff"}
				enableArcLinkLabels={false}
				arcLabel={(d) => `${d.id}`}
				arcLabelsTextColor={"#ffffff"}
				arcLabelsRadiusOffset={0.65}
				colors={["#2563eb"]}
				theme={{
					labels: {
						text: {
							fontSize: "18px",
						},
					},
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
				}}
				role="application"
			/>
		</div>
	);
}

function BumpChart(
	props: JSX.IntrinsicAttributes &
		ClassAttributes<HTMLDivElement> &
		HTMLAttributes<HTMLDivElement>
) {
	return (
		<div {...props}>
			<ResponsiveBump
				data={[
					{
						id: "Serie 1",
						data: [
							{
								x: 2000,
								y: 11,
							},
							{
								x: 2001,
								y: 8,
							},
							{
								x: 2002,
								y: 12,
							},
							{
								x: 2003,
								y: 7,
							},
							{
								x: 2004,
								y: 9,
							},
						],
					},
					{
						id: "Serie 2",
						data: [
							{
								x: 2000,
								y: 7,
							},
							{
								x: 2001,
								y: 3,
							},
							{
								x: 2002,
								y: 3,
							},
							{
								x: 2003,
								y: 10,
							},
							{
								x: 2004,
								y: 1,
							},
						],
					},
				]}
				colors={{ scheme: "spectral" }}
				lineWidth={3}
				activeLineWidth={6}
				inactiveLineWidth={3}
				inactiveOpacity={0.15}
				pointSize={10}
				activePointSize={16}
				inactivePointSize={0}
				pointColor={{ theme: "background" }}
				pointBorderWidth={3}
				activePointBorderWidth={3}
				pointBorderColor={{ from: "serie.color" }}
				axisTop={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: "",
					legendPosition: "middle",
					legendOffset: -36,
					truncateTickAt: 0,
				}}
				axisBottom={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: "",
					legendPosition: "middle",
					legendOffset: 32,
					truncateTickAt: 0,
				}}
				axisLeft={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: "ranking",
					legendPosition: "middle",
					legendOffset: -40,
					truncateTickAt: 0,
				}}
				margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
				axisRight={null}
			/>
		</div>
	);
}

function InnerPieChart(
	props: JSX.IntrinsicAttributes &
		ClassAttributes<HTMLDivElement> &
		HTMLAttributes<HTMLDivElement>
) {
	return (
		<div {...props}>
			<ResponsivePie
				data={[
					{
						id: "lisp",
						label: "lisp",
						value: 394,
						color: "hsl(170, 70%, 50%)",
					},
					{
						id: "stylus",
						label: "stylus",
						value: 182,
						color: "hsl(193, 70%, 50%)",
					},
					{
						id: "php",
						label: "php",
						value: 318,
						color: "hsl(74, 70%, 50%)",
					},
					{
						id: "elixir",
						label: "elixir",
						value: 91,
						color: "hsl(238, 70%, 50%)",
					},
					{
						id: "python",
						label: "python",
						value: 454,
						color: "hsl(252, 70%, 50%)",
					},
				]}
				margin={{ top: 30, right: 70, bottom: 80, left: 20 }}
				innerRadius={0.5}
				padAngle={0.9}
				cornerRadius={5}
				activeOuterRadiusOffset={9}
				borderWidth={1}
				borderColor={{
					from: "color",
					modifiers: [["darker", 0.2]],
				}}
				arcLinkLabelsSkipAngle={10}
				arcLinkLabelsTextColor="#333333"
				arcLinkLabelsThickness={2}
				arcLinkLabelsColor={{ from: "color" }}
				arcLabelsSkipAngle={10}
				arcLabelsTextColor={{
					from: "color",
					modifiers: [["darker", 2]],
				}}
				defs={[
					{
						id: "dots",
						type: "patternDots",
						background: "inherit",
						color: "rgba(255, 255, 255, 0.3)",
						size: 4,
						padding: 1,
						stagger: true,
					},
					{
						id: "lines",
						type: "patternLines",
						background: "inherit",
						color: "rgba(255, 255, 255, 0.3)",
						rotation: -45,
						lineWidth: 6,
						spacing: 10,
					},
				]}
				fill={[
					{
						match: {
							id: "ruby",
						},
						id: "dots",
					},
					{
						match: {
							id: "c",
						},
						id: "dots",
					},
					{
						match: {
							id: "go",
						},
						id: "dots",
					},
					{
						match: {
							id: "python",
						},
						id: "dots",
					},
					{
						match: {
							id: "scala",
						},
						id: "lines",
					},
					{
						match: {
							id: "lisp",
						},
						id: "lines",
					},
					{
						match: {
							id: "elixir",
						},
						id: "lines",
					},
					{
						match: {
							id: "javascript",
						},
						id: "lines",
					},
				]}
				legends={[
					{
						anchor: "bottom",
						direction: "row",
						justify: false,
						translateX: 0,
						translateY: 56,
						itemsSpacing: 0,
						itemWidth: 100,
						itemHeight: 18,
						itemTextColor: "#999",
						itemDirection: "left-to-right",
						itemOpacity: 1,
						symbolSize: 18,
						symbolShape: "circle",
						effects: [
							{
								on: "hover",
								style: {
									itemTextColor: "#000",
								},
							},
						],
					},
				]}
			/>
		</div>
	);
}
