import { Link, useLoaderData } from "react-router-dom";
import HomeCard from "../components/HomeCard";

const Home = () => {
    const homeCards = useLoaderData();
    // console.log(homeCards);

    // const {bookName, author, image, rating, category } = homeCards;

    return (
        <div>
            {/* hero  */}
            <div className="hero min-h-[550px] bg-[#1313130D] rounded-3xl lg:px-28 lg:py-20">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">

                    <img src="https://i.ibb.co/H4gBFTB/hero-removebg-preview.png" className="bg-[#1313130D] max-w-sm rounded-lg shadow-2xl" />

                    <div className="">
                        <h1 className="mb-16 text-2xl lg:text-6xl font-bold">Books to freshen <br />up your bookshelf</h1>

                        <Link to="/listed"><button className="hover:scale-105 font-bold text-white text-xl py-5 px-6 rounded-lg bg-[#23BE0A]">View The List</button></Link>
                    </div>
                </div>
            </div>

            {/* books */}
            <div className="mt-20 mb-32">
                <h2 className="text-center font-bold text-4xl">Books</h2>

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {
                        homeCards.map(card => <HomeCard key={card.bookid} card={card}></HomeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;