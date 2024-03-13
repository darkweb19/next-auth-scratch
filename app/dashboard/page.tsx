export default function dashboard() {
	return (
		<div>
			<div className="flex h-screen bg-gray-100">
				{/* Left Sidebar */}
				<div className="w-1/6 bg-gray-800 text-white p-4">
					<h1 className="text-2xl font-bold mb-4">Dashboard</h1>
					<ul className="space-y-2">
						<li>
							<button className="w-full p-2 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none">
								Admin
							</button>
						</li>
						<li>
							<button className="w-full p-2 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none">
								Product
							</button>
						</li>
						<li>
							<button className="w-full p-2 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none">
								Finance
							</button>
						</li>
						<li>
							<button className="w-full p-2 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none">
								Logout
							</button>
						</li>
					</ul>
				</div>

				{/* Middle Content */}
				<div className="w-2/3 p-4 bg-white">
					<h2 className="text-2xl font-semibold mb-4">
						Welcome to the Dashboard
					</h2>
					<p className="text-gray-600">
						This is the middle content area. Add something nice
						here!
					</p>
				</div>

				{/* Right Sidebar */}
				<div className="w-1/6 p-4 bg-gray-200">
					<h3 className="text-lg font-semibold mb-2">Page Views</h3>
					<p className="text-gray-600">Total views: 100,000</p>
				</div>
			</div>
		</div>
	);
}
