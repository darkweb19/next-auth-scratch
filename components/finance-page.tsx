/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Qib0ejL1gxH
 */
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FinancePage() {
	return (
		<>
			<div className="px-4 md:px-6">
				<div className="max-w-5xl mx-auto space-y-4">
					<div className="space-y-1.5">
						<h1 className="text-xl font-bold tracking-tighter sm:text-3xl">
							Finance Tracker
						</h1>
					</div>
				</div>
			</div>
			<section className="py-8 md:py-12 xl:py-16">
				<div className="max-w-5xl mx-auto px-4 md:px-6">
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<h2 className="text-2xl font-semibold tracking-tighter">
								Assets
							</h2>
							<Button size="sm">Add Asset</Button>
						</div>
						<div className="w-full overflow-auto">
							<table className="w-full border-collapse text-left table-auto">
								<thead>
									<tr>
										<th className="pb-2 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
											Name
										</th>
										<th className="pb-2 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
											Value
										</th>
										<th className="pb-2 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
											Description
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-border">
									<tr className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
										<td className="p-2.5">
											Savings Account
										</td>
										<td className="p-2.5">€10,000</td>
										<td className="p-2.5">
											Emergency fund
										</td>
									</tr>
									<tr className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
										<td className="p-2.5">Home</td>
										<td className="p-2.5">€250,000</td>
										<td className="p-2.5">
											Primary residence
										</td>
									</tr>
									<tr className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
										<td className="p-2.5">Car</td>
										<td className="p-2.5">€20,000</td>
										<td className="p-2.5">
											2018 Honda Civic
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</section>
			<section className="py-8 md:py-12 xl:py-16">
				<div className="max-w-5xl mx-auto px-4 md:px-6">
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<h2 className="text-2xl font-semibold tracking-tighter">
								Salary
							</h2>
							<Button size="sm">Edit Salary</Button>
						</div>
						<div className="grid gap-1 md:grid-cols-2">
							<div className="flex items-center gap-4">
								<div className="text-sm font-medium text-gray-500 md:w-1/3 dark:text-gray-400">
									Monthly Salary
								</div>
								<div className="text-gray-900 md:ml-auto md:text-right dark:text-gray-50">
									€3,000
								</div>
							</div>
							<div className="flex items-center gap-4">
								<div className="text-sm font-medium text-gray-500 md:w-1/3 dark:text-gray-400">
									Bonuses
								</div>
								<div className="text-gray-900 md:ml-auto md:text-right dark:text-gray-50">
									€500
								</div>
							</div>
							<div className="flex items-center gap-4">
								<div className="text-sm font-medium text-gray-500 md:w-1/3 dark:text-gray-400">
									Deductions
								</div>
								<div className="text-gray-900 md:ml-auto md:text-right dark:text-gray-50">
									-€100
								</div>
							</div>
						</div>
						<div className="flex items-center justify-end">
							<h3 className="text-2xl font-semibold tracking-tighter">
								Total: €3,400
							</h3>
						</div>
					</div>
				</div>
			</section>
			<section className="py-8 md:py-12 xl:py-16">
				<div className="max-w-5xl mx-auto px-4 md:px-6">
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<h2 className="text-2xl font-semibold tracking-tighter">
								Investments
							</h2>
							<Button size="sm">Add Investment</Button>
						</div>
						<div className="w-full overflow-auto">
							<table className="w-full border-collapse text-left table-auto">
								<thead>
									<tr>
										<th className="pb-2 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
											Name
										</th>
										<th className="pb-2 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
											Type
										</th>
										<th className="pb-2 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
											Value
										</th>
										<th className="pb-2 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
											Performance
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-border">
									<tr className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
										<td className="p-2.5">Tech Inc.</td>
										<td className="p-2.5">Stocks</td>
										<td className="p-2.5">€5,000</td>
										<td className="p-2.5">+10%</td>
									</tr>
									<tr className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
										<td className="p-2.5">Bonds</td>
										<td className="p-2.5">Bonds</td>
										<td className="p-2.5">€10,000</td>
										<td className="p-2.5">+5%</td>
									</tr>
									<tr className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
										<td className="p-2.5">
											Real Estate Fund
										</td>
										<td className="p-2.5">REITs</td>
										<td className="p-2.5">€20,000</td>
										<td className="p-2.5">+8%</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</section>
			<div className="border-t border-gray-200 dark:border-gray-800">
				<nav
					aria-label="Page"
					className="flex items-stretch min-h-0 max-h-24 border-t border-gray-200"
				>
					<Link
						aria-label="Previous"
						className="flex-1 inline-flex items-center justify-center border-t-2 border-transparent font-semibold hover:text-gray-900 dark:hover:text-gray-50"
						href="#"
					>
						Budgeting
					</Link>
					<Link
						aria-label="Next"
						className="flex-1 inline-flex items-center justify-center border-t-2 border-transparent font-semibold hover:text-gray-900 dark:hover:text-gray-50"
						href="#"
					>
						Expenses
					</Link>
					<Link
						aria-label="Next"
						className="flex-1 inline-flex items-center justify-center border-t-2 border-transparent font-semibold hover:text-gray-900 dark:hover:text-gray-50"
						href="#"
					>
						Reports
					</Link>
				</nav>
			</div>
		</>
	);
}
