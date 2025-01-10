import { Github, Linkedin, Twitter, Wallet } from "lucide-react";

export default function Footer() {
	return (
		<footer className="py-12 px-4 bg-white border-t border-gray-100">
			<div className="max-w-6xl mx-auto">
				<div className="grid md:grid-cols-4 gap-8 mb-12">
					<div>
						<div className="flex items-center mb-6">
							<Wallet className="h-6 w-6" />
							<span className="ml-2 text-lg font-bold">
								FinanceManager
							</span>
						</div>
						<p className="text-gray-600 mb-6">
							Making financial management simple and intuitive for
							everyone.
						</p>
						<div className="flex space-x-4">
							<a
								href="#"
								className="text-gray-400 hover:text-black"
							>
								<Twitter className="h-5 w-5" />
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-black"
							>
								<Linkedin className="h-5 w-5" />
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-black"
							>
								<Github className="h-5 w-5" />
							</a>
						</div>
					</div>

					<div>
						<h4 className="text-lg font-semibold mb-4">Product</h4>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-gray-600 hover:text-black"
								>
									Features
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-600 hover:text-black"
								>
									Pricing
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-600 hover:text-black"
								>
									Security
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-600 hover:text-black"
								>
									Roadmap
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-lg font-semibold mb-4">Company</h4>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-gray-600 hover:text-black"
								>
									About
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-600 hover:text-black"
								>
									Blog
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-600 hover:text-black"
								>
									Careers
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-600 hover:text-black"
								>
									Press
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-lg font-semibold mb-4">Support</h4>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-gray-600 hover:text-black"
								>
									Help Center
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-600 hover:text-black"
								>
									Documentation
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-600 hover:text-black"
								>
									API Status
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-600 hover:text-black"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-gray-100 pt-8 text-center text-gray-600">
					<p>© 2024 FinanceManager. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
