
const Faq = () => {
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl py-5 ">Book Recommendations</h2>
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

        </div>
    );
};

export default Faq;