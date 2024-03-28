
const Faq = () => {
	return (
		<div>
			<section className="dark:bg-gray-100 dark:text-gray-800">
				<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">

					<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl py-5 ">Frequently Asked Questions</h2>
					<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300 ">
						<details className="bg-gray-200 mb-2 p-2 rounded">
							<summary className="py-2 outline-none cursor-pointer focus:underline">Books Recommended by Influencers in Technology</summary>
							<div className="px-4 pb-4">
								<p>Explore a curated list of books recommended by leading figures in the technology industry. Discover the latest trends and must-reads in tech?</p>
							</div>
						</details>
						<details className="bg-gray-200 mb-2 p-2 rounded">
							<summary className="py-2 outline-none cursor-pointer focus:underline">Books Recommended by Influencers in Business</summary>
							<div className="px-4 pb-4">
								<p>Dive into a selection of books recommended by successful business leaders. Learn from their experiences and insights to grow your business?</p>
							</div>
						</details>
						<details className="bg-gray-200 mb-2 p-2 rounded">
							<summary className="py-2 outline-none cursor-pointer focus:underline">How do I improve my reading habits?</summary>
							<div className="px-4 pb-4 space-y-2">
								<p>Improving your reading habits can be achieved by setting aside specific times for reading, choosing books that interest you, and tracking your progress.</p>
							</div>
						</details>

						<details className="bg-gray-200 mb-2 p-2 rounded">
							<summary className="py-2 outline-none cursor-pointer focus:underline">What are some popular genres to explore?</summary>
							<div className="px-4 pb-4 space-y-2">
								<p>Popular genres include mystery, science fiction, fantasy, romance, and historical fiction. Each genre offers unique stories and perspectives.</p>
							</div>
						</details>

						<details className="bg-gray-200 mb-2 p-2 rounded">
							<summary className="py-2 outline-none cursor-pointer focus:underline"> How can I find new authors to follow?</summary>
							<div className="px-4 pb-4 space-y-2">
								<p>Following book blogs, joining online communities, and exploring bookstores or libraries can help you discover new authors. Reading reviews and recommendations from trusted sources is also a great way to find new authors.</p>
							</div>
						</details>

						<details className="bg-gray-200 mb-2 p-2 rounded">
							<summary className="py-2 outline-none cursor-pointer focus:underline">How often should I read to stay engaged?</summary>
							<div className="px-4 pb-4 space-y-2">
								<p >Engaging with books regularly, such as reading a few pages each day, can help maintain your interest and keep you motivated. Its also beneficial to take breaks and explore different genres to keep your reading experience fresh.</p>
							</div>
						</details>



					</div>
				</div>
			</section>

			{/* help center */}
			<section className="dark:bg-gray-100 dark:text-gray-800">
				<div className="container flex flex-col items-center p-4 mx-auto md:p-8">
					<h1 className="text-3xl font-bold leading-none text-center sm:text-4xl">Support Center</h1>
					<div className="relative mt-6 mb-12 text-white text-center">
						<span className="absolute inset-y-0 flex items-center pl-4 mx-auto">
							<button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
								<svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-800">
									<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
								</svg>
							</button>
						</span>
						<input type="search" name="Search" placeholder="Search..." className="w-full py-3 pl-12 text-sm rounded-full sm:w-96 focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 bg-[#23BE0A] p-4"/>
					</div>
					<div className="flex flex-col w-full divide-y sm:flex-row sm:divide-y-0 sm:divide-x sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
						<div className="flex flex-col w-full divide-y dark:divide-gray-300">
							<a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Billing</a>
							<a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Support</a>
							<a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Account</a>
						</div>
						<div className="flex flex-col w-full divide-y dark:divide-gray-300">
							<a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Features</a>
							<a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Contact us</a>
							<a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">My orders</a>
						</div>
						<div className="hidden w-full divide-y sm:flex-col sm:flex dark:divide-gray-300">
							<a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Enterprise</a>
							<a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Privacy</a>
							<a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Developers</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Faq;