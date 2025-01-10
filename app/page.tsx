import {
	ArrowRight,
	BarChart3,
	Shield,
	Wallet,
	CheckCircle2,
	Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div className="min-h-screen bg-white text-black">
			{/* Hero Section */}
			<header className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-50">
				<div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white z-10" />
				<video
					autoPlay
					loop
					muted
					playsInline
					className="absolute w-full h-full object-cover opacity-50"
				>
					<source
						src="https://cdn.pixabay.com/vimeo/147860386/numbers-1456.mp4"
						type="video/mp4"
					/>
				</video>

				<div className="relative z-20 text-center max-w-4xl mx-auto px-4 pt-16">
					<h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight text-black">
						Master Your Money
					</h1>
					<p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
						Intelligent financial management for the modern era.
						Simple, secure, and designed for you.
					</p>
					<Button
						size="lg"
						className="bg-black text-white hover:bg-gray-900"
					>
						Get Started <ArrowRight className="ml-2 h-5 w-5" />
					</Button>
				</div>
			</header>

			{/* Features Section */}
			<section id="features" className="py-24 px-4 bg-white">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
						Reimagining Financial Control
					</h2>

					<div className="grid md:grid-cols-3 gap-8">
						<Card className="p-8 border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
							<Wallet className="h-12 w-12 mb-6" />
							<h3 className="text-2xl font-semibold mb-4">
								Smart Budgeting
							</h3>
							<p className="text-gray-600">
								AI-powered insights that adapt to your spending
								patterns and help you save more.
							</p>
						</Card>

						<Card className="p-8 border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
							<BarChart3 className="h-12 w-12 mb-6" />
							<h3 className="text-2xl font-semibold mb-4">
								Real-time Analytics
							</h3>
							<p className="text-gray-600">
								Beautiful visualizations that make understanding
								your finances simple and intuitive.
							</p>
						</Card>

						<Card className="p-8 border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
							<Shield className="h-12 w-12 mb-6" />
							<h3 className="text-2xl font-semibold mb-4">
								Bank-grade Security
							</h3>
							<p className="text-gray-600">
								Enterprise-level encryption and security
								protocols to keep your data safe.
							</p>
						</Card>
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			<section id="pricing" className="py-24 px-4 bg-gray-50">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
						Simple, Transparent Pricing
					</h2>

					<div className="grid md:grid-cols-3 gap-8">
						<Card className="p-8 bg-white border border-gray-100">
							<h3 className="text-2xl font-semibold mb-2">
								Starter
							</h3>
							<p className="text-gray-600 mb-6">
								Perfect for personal use
							</p>
							<div className="text-4xl font-bold mb-6">
								$0
								<span className="text-xl font-normal">
									/month
								</span>
							</div>
							<ul className="space-y-4 mb-8">
								<li className="flex items-center">
									<CheckCircle2 className="h-5 w-5 mr-2 text-green-600" />
									Basic budgeting tools
								</li>
								<li className="flex items-center">
									<CheckCircle2 className="h-5 w-5 mr-2 text-green-600" />
									Up to 2 accounts
								</li>
								<li className="flex items-center">
									<CheckCircle2 className="h-5 w-5 mr-2 text-green-600" />
									Monthly reports
								</li>
							</ul>
							<Button className="w-full bg-black text-white hover:bg-gray-900">
								Get Started
							</Button>
						</Card>

						<Card className="p-8 bg-white border-2 border-black relative">
							<div className="absolute top-0 right-0 bg-black text-white px-4 py-1 text-sm">
								Popular
							</div>
							<h3 className="text-2xl font-semibold mb-2">Pro</h3>
							<p className="text-gray-600 mb-6">
								For growing finances
							</p>
							<div className="text-4xl font-bold mb-6">
								$9
								<span className="text-xl font-normal">
									/month
								</span>
							</div>
							<ul className="space-y-4 mb-8">
								<li className="flex items-center">
									<CheckCircle2 className="h-5 w-5 mr-2 text-green-600" />
									Advanced analytics
								</li>
								<li className="flex items-center">
									<CheckCircle2 className="h-5 w-5 mr-2 text-green-600" />
									Unlimited accounts
								</li>
								<li className="flex items-center">
									<CheckCircle2 className="h-5 w-5 mr-2 text-green-600" />
									Investment tracking
								</li>
							</ul>
							<Button className="w-full bg-black text-white hover:bg-gray-900">
								Start Free Trial
							</Button>
						</Card>

						<Card className="p-8 bg-white border border-gray-100">
							<h3 className="text-2xl font-semibold mb-2">
								Enterprise
							</h3>
							<p className="text-gray-600 mb-6">
								For large organizations
							</p>
							<div className="text-4xl font-bold mb-6">
								Custom
							</div>
							<ul className="space-y-4 mb-8">
								<li className="flex items-center">
									<CheckCircle2 className="h-5 w-5 mr-2 text-green-600" />
									Custom integration
								</li>
								<li className="flex items-center">
									<CheckCircle2 className="h-5 w-5 mr-2 text-green-600" />
									Dedicated support
								</li>
								<li className="flex items-center">
									<CheckCircle2 className="h-5 w-5 mr-2 text-green-600" />
									Advanced security
								</li>
							</ul>
							<Button className="w-full bg-black text-white hover:bg-gray-900">
								Contact Sales
							</Button>
						</Card>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section id="testimonials" className="py-24 px-4 bg-white">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
						Trusted by Thousands
					</h2>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								name: "Sarah Johnson",
								role: "Small Business Owner",
								image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
								quote: "FinanceManager transformed how I handle my business finances. The insights are invaluable.",
							},
							{
								name: "Michael Chen",
								role: "Investment Analyst",
								image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
								quote: "The most intuitive financial platform I've ever used. It's changed my entire approach to money management.",
							},
							{
								name: "Emma Davis",
								role: "Freelancer",
								image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
								quote: "Finally, a financial tool that speaks my language. Simple yet powerful.",
							},
						].map((testimonial, index) => (
							<Card
								key={index}
								className="p-8 border-gray-100 shadow-lg"
							>
								<div className="flex items-center mb-6">
									<img
										src={testimonial.image}
										alt={testimonial.name}
										className="w-12 h-12 rounded-full mr-4"
									/>
									<div>
										<h4 className="font-semibold">
											{testimonial.name}
										</h4>
										<p className="text-gray-600">
											{testimonial.role}
										</p>
									</div>
								</div>
								<div className="flex mb-4">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className="h-5 w-5 text-yellow-400 fill-current"
										/>
									))}
								</div>
								<p className="text-gray-600">
									{testimonial.quote}
								</p>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 px-4 bg-gray-50">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-bold mb-8">
						Ready to transform your financial future?
					</h2>
					<p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
						Join thousands of users who have already taken control
						of their finances. Start your journey today.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							size="lg"
							className="bg-black text-white hover:bg-gray-900"
						>
							Start Free Trial
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="border-black text-black hover:bg-black hover:text-white"
						>
							Learn More
						</Button>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}
