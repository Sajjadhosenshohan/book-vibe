import { useState } from "react";
import Read from "../components/Read";
import List from "../components/List";
import sortBy from "sort-by";
import { getBlogs, getBook2 } from "../components/Utility";
import { RiArrowDropDownLine } from "react-icons/ri";

const Listed = () => {

    const [tabIndex, setTabIndex] = useState(0);



    // for read
    const bloo = getBlogs()
    const [readAll, setReadAll] = useState(bloo);

    // wishList
    const bloo2 = getBook2()
    const [readAll2, setReadAll2] = useState(bloo2);


    const handleFilter = (filterType) => {
        let filteredBooks;

        let filteredWishList ;

        if (filterType === 'rating') {
            // Filter books with rating more than 4.4
            // filteredBooks = readAll.filter(book => book.rating > 4.4);
            filteredBooks = [...readAll].sort((a, b) => b.rating - a.rating);
            filteredWishList = [...readAll2].sort((a, b) => b.rating - a.rating);

        }
        else if (filterType === 'totalPages') {

            filteredBooks = [...readAll].sort((a, b) => b.totalPages - a.totalPages);
            filteredWishList = [...readAll2].sort((a, b) => b.totalPages - a.totalPages);
        }
        else if (filterType === 'yearOfPublishing') {

            filteredBooks = [...readAll].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            filteredWishList = [...readAll2].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }
        else {

            filteredBooks = readAll;
            filteredWishList = readAll2;
        }

        // console.log(40,filteredBooks);
        setReadAll(filteredBooks);
        setReadAll2(filteredWishList);
    };


    // <details>
    //     <summary>
    //         Parent
    //     </summary>
    //     <ul className="p-2 bg-base-100 rounded-t-none">
    //         <li><a>Link 1</a></li>
    //         <li><a>Link 2</a></li>
    //     </ul>
    // </details>


    return (
        <div className=' px-6  mx-auto space-y-12 overflow-hidden'>

            <div className="">
                <div className="text-center bg-[#1313130D] rounded-2xl">
                    <h2 className="font-bold text-3xl py-11">Books</h2>
                </div>

                {/* button  */}
                <div className="mt-8 mb-10 flex  justify-center">
                    {/* <select className="select  join-item font-bold text-white pr-0 bg-[#23BE0A]">
                        <option disabled selected>Sort</option>
                        <option onClick={() => handleFilter('rating')}>Rating</option>
                        <option onClick={() => handleFilter('totalPages')}>Number of pages</option>
                        <option onClick={() => handleFilter('yearOfPublishing')}>Publisher year</option>
                    </select> */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1 font-bold text-white  bg-[#23BE0A]">
                            <h2>Sort By</h2>
                            <RiArrowDropDownLine />
                        </div>
                        

                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li onClick={() => handleFilter('rating')}><a>Rating</a></li>
                            <li onClick={() => handleFilter('totalPages')}><a>Total Pages</a></li>
                            <li onClick={() => handleFilter('yearOfPublishing')}><a>Year of Publishing</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <article className='space-y-8 '>
                <div className='space-y-6 '>
                    {/* <ul>
                        <li className="btn" onClick={()=>handleFilter('rating')}>rating</li>
                        <li className="btn" onClick={()=>handleFilter('totalPages')}>Year of</li>
                        <li className="btn" onClick={()=>handleFilter('publisher')}>Publisher</li>
                    </ul> */}

                    {/* tabs */}
                    <div className='flex  items-center overflow-x-auto overflow-y-hidden sm:justify-start
                        flex-nowrap '>
                        <button

                            onClick={() => setTabIndex(0)}
                            className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'
                                }`}
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                className='w-4 h-4'
                            >
                                <path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'></path>
                                <path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'></path>
                            </svg>

                            <span className="text-[#131313CC]">Read Books</span>
                        </button>


                        <button

                            onClick={() => setTabIndex(1)}
                            className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'
                                }  `}
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                className='w-4 h-4'
                            >
                                <path d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'></path>
                            </svg>
                            <span className="text-[#131313CC]">Wishlist Books</span>
                        </button>

                    </div>
                </div>
                {/* <Outlet /> */}

                <div>
                    {
                        tabIndex === 0 ? <Read readAll={readAll} sortBy={sortBy}></Read> : <List readAll2={readAll2} sortBy={sortBy}></List>
                    }
                </div>
            </article>
        </div>
    );
};

export default Listed;