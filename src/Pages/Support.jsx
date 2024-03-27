
const Support = () => {
    return (
        <div>
            <section className="p-6 dark:text-gray-800">
                <form  className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md  dark:bg-gray-50 border-2 border-gray-300 shadow-xl">
                    <h2 className="text-center text-3xl font-bold leading-tight ">Contact us</h2>
                    <div>
                        <label  className="block mb-1 ml-1">Name</label>
                        <input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 border border-gray-200 focus:dark:ring-violet-600 dark:bg-gray-100" />
                    </div>
                    <div>
                        <label className="block mb-1 ml-1">Email</label>
                        <input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 border border-gray-200 focus:dark:ring-violet-600 dark:bg-gray-100" />
                    </div>
                    <div>
                        <label  className="block mb-1 ml-1">Phone</label>
                        <input id="number" type="number" placeholder="Your phone number" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 border border-gray-200 focus:dark:ring-violet-600 dark:bg-gray-100" />
                    </div>
                    
                    <div>
                        <button type="submit" className="w-full  font-bold text-white text-xl py-4 px-6 rounded-lg bg-[#23BE0A]">Send</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Support;