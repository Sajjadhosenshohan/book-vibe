import { IoLocationOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import PropTypes from 'prop-types';


const Sort = ({ b }) => {
    const { image, tags , bookName, author, publisher, yearOfPublishing, totalPages, rating, category} = b;
    return (
        <div className="card card-side bg-base-100 shadow-xl p-6 gap-6 rounded-2xl border-2 border-[#13131326]">
            <figure className="bg-[#1313130D] p-7 rounded-lg"><img className="w-[150px] h-[200px]" src={image} alt="Movie" /></figure>


            <div className="card-body">
                <h2 className="font-bold text-2xl text-[#131313]">{bookName}</h2>
                <p className="text-[#131313CC] font-medium">By: <span>{author}</span></p>

                {/*  */}
                <div className="flex  mb-4 gap-4 items-center">
                    <p className="font-bold flex-none">Tag</p>
                    {
                        tags.map(tag => <span className='text-[#23BE0A] font-bold bg-[#F3F3F3] p-1 rounded-lg' key={tag.totalPages}>#{tag}</span>)
                    }
                    <div className="flex gap-2 font-bold items-center text-[#131313CC]">
                        <div className="text-2xl">
                            <IoLocationOutline />
                        </div>
                        <p className=" ">Year of Publishing: <span>{yearOfPublishing}</span></p>
                    </div>
                </div>

                {/*  */}
                <div className="gap-5 flex ">
                    <div className="flex gap-2 font-bold items-center text-[#131313CC]">
                        <div className="text-2xl"><BsPeople /></div>
                        <p>Publisher: {publisher}</p>
                    </div>

                    <div className="flex gap-2 font-bold items-center text-[#131313CC]">
                        <div className="text-2xl"><IoNewspaperOutline /></div>
                        <p>Page {totalPages}</p>
                    </div>
                </div>
                
                <div className="divider text-[#13131326]"></div>

                <div className="flex gap-3">
                    <span className=" py-3 px-5 text-[#328EFF] bg-[#328EFF26] rounded-[30px] ">Category: {category}</span>

                    <span className=" py-3 px-5 text-[#FFAC33] bg-[#328EFF26] rounded-[30px] ">Rating: {rating}</span>

                    <span className=" py-3 px-5 text-[white] bg-[#23BE0A] rounded-[30px] ">View Details</span>
                    
                </div>
            </div>
        </div>
    );
};

Sort.propTypes = {
    b: PropTypes.object
}
export default Sort;