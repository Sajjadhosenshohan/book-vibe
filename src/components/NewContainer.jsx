import { useLoaderData, useParams } from "react-router-dom";
import { ListSaveBlog, saveBlog } from "./Utility";

const NewContainer = () => {
    const newDiv = useLoaderData();

    const { bookid } = useParams();
    const idInt = parseInt(bookid)
    // console.log( bookid,newDiv);

    const SingleBook = newDiv.find(job => job.bookid === idInt)

    // console.log(id, SingleJob);
    const { image , bookName, author, yearOfPublishing, publisher, category, rating, totalPages, review, tags} = SingleBook;

    const handleRead = (SingleBook) =>{
        // console.log(SingleBook);
        saveBlog(SingleBook)
    }
    const wishListSaveBlog = (SingleBook) =>{
        // console.log(SingleBook);
        ListSaveBlog(SingleBook)
    }

    return (
        <div className=" flex gap-12">
            {/* img */}

            <div className="flex rounded-lg w-1/2 bg-[#1313130D] items-center justify-center">
                <img  src={image} alt="" />
            </div>
            {/* text */}

            <div className="w-1/2 space-y-6">
                {/* title & author */}
                <div>
                    <h2 className="text-4xl font-bold">{bookName}</h2>
                    <p className="mt-4 mb-6 font-medium text-xl text-[#131313CC]">By : {author}</p>
                </div>
                {/* fiction */}
                <p className="border-y-2 border-[#13131326] font-medium text-xl text-[#131313CC] py-2">{category}</p>
                {/* review & tag */}
                <div className="border-b-2 border-[#1313132">
                    <div className="mb-6">
                        <p className="font-bold ">Review: <span className="font-semibold text-[#131313B3]">{review}</span></p>
                    </div>

                    <div className="flex gap-8 mb-4">
                        <p className="font-bold">Tag:</p>
                        {
                            tags.map(tag => <span className='text-[#23BE0A] font-bold bg-[#F3F3F3] p-1 rounded-lg' key={tag.totalPages}>#{tag}</span>)
                        }
                    </div>
                </div>
                {/* pageNum and button */}
                <div>
                    <div className="mt-6 mb-8">
                        <p className="font-semibold text-[#131313B3]">Number of Pages: <span className="ml-2 font-semibold text-[#131313]">  {totalPages}</span></p>

                        <p className="font-semibold text-[#131313B3]">Publisher: <span className="ml-2 font-semibold text-[#131313]">{publisher}</span></p>

                        <p className="font-semibold text-[#131313B3]">Year of Publishing: <span className="ml-2 font-semibold text-[#131313]">{yearOfPublishing}</span></p>

                        <p className="font-semibold text-[#131313B3]">Rating: <span className="ml-2 font-semibold text-[#131313]">{rating}</span></p>
                    </div>

                    <div className="flex gap-4">
                        <button onClick={()=> handleRead(SingleBook)} className="hover:scale-105 hover:border-[#23BE0A] font-bold text-black border-2 border-[#1313134D] text-xl py-4 px-6 rounded-lg">Read</button>

                        <button onClick={() => wishListSaveBlog(SingleBook)} className="hover:scale-105 font-bold text-white text-xl py-4 px-6 rounded-lg bg-[#59C6D2]">Wishlist</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewContainer;
