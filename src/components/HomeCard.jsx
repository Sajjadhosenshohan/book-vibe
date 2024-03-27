import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const HomeCard = ({card}) => {
    // console.log(card);
    const {bookName, author, image, rating, category , tags, bookid} = card;
    // console.log(bookid);
    return (
        <Link to={`/blog/${bookid}`}>
            <div className="border-2 border-[#13131326] h-[600px] card p-2 lg:p-6 card-compact  bg-base-100  shadow-xl">
                <figure className='h-[230px] bg-[#F3F3F3]'><img className='h-[200px]' src={image} alt="Shoes" /></figure>
                <div className="card-body">

                    <div className="flex text-[#23BE0A] font-bold  gap-4 mt-6 mb-4">
                        {/* <span>Young Adult</span>
                        <span>Identity</span> */}
                        {
                            tags.map(tag => <span className='bg-[#F3F3F3] p-1 rounded-lg' key={tag.author}>#{tag}</span>)
                        }
                    </div>

                    <h2 className="card-title font-bold text-2xl">{bookName}</h2>
                    <p className="text-[#131313CC] font-medium mt-4 flex-none">By: {author}</p>
                    <div className="mt-5 py-5 text-xl border-[#13131326] border-t-2  border-dashed flex justify-between font-medium">
                        <p>{category}</p>

                        <div className='flex gap-2 font-semibold text-xl items-center'>
                            <p>{rating}</p>
                            <FaRegStar />
                        </div>

                    </div>
                </div>
            </div>
        </Link>
    );
};
HomeCard.propTypes = {
    card: PropTypes.object
}
export default HomeCard;