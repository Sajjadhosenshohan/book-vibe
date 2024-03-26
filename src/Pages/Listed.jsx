import { useState } from "react";
import Read from "../components/Read";
import List from "../components/List";
import sortBy from "sort-by";
import { getBlogs } from "../components/Utility";


const Listed = () => {

    const [tabIndex, setTabIndex] = useState(0);




    const bloo = getBlogs()

    const [readAll, setReadAll] = useState(bloo);


    const handleFilter = (filterType) => {
        let filteredBooks;

        if (filterType === 'rating') {
            // Filter books with rating more than 4.4
            filteredBooks = readAll.filter(book => book.rating > 4.4);
        } else if (filterType === 'totalPages') {
            // Filter books with total pages more than 250
            filteredBooks = readAll.filter(book => book.totalPages > 280);
        } else if (filterType === 'yearOfPublishing') {
            // Filter books published after the year 2000
            filteredBooks = readAll.filter(book => book.yearOfPublishing > 1950);
        } else {
            // If no specific filter is selected, show all books
            filteredBooks = readAll;
        }

        console.log(37,filteredBooks);
        setReadAll(filteredBooks);
    };


    // const handleFilter = filter => {
    //     if (filter === 4.5) {
    //         const rating = readAll.filter(book => book.rating)
    //         console.log(22, rating);
    //         setReadAll(rating)
    //     }
    //     else if (filter === 'totalPages') {
    //         const totalPages = readAll.filter(book => book.totalPages)
    //         console.log(22, totalPages);
    //         setReadAll(totalPages)
    //     }
    //     else if (filter === 'publisher') {
    //         const publisher = readAll.filter(book => book.publisher)
    //         console.log(22, publisher);
    //         setReadAll(publisher)
    //     }
    // }
    return (
        <div className='max-w-3xl px-6 py-16 mx-auto space-y-12 overflow-hidden'>
            <article className='space-y-8 '>
                <div className='space-y-6'>
                    <h1 className='text-4xl font-bold md:tracking-tight md:text-5xl'>

                    </h1>

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1">Click</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li onClick={() => handleFilter('rating')}><a>Rating</a></li>
                            <li onClick={() => handleFilter('totalPages')}><a>Total Pages</a></li>
                            <li onClick={() => handleFilter('yearOfPublishing')}><a>Year of Publishing</a></li>

                        </ul>
                    </div>
                    {/* <ul>
                        <li className="btn" onClick={()=>handleFilter('rating')}>rating</li>
                        <li className="btn" onClick={()=>handleFilter('totalPages')}>Year of</li>
                        <li className="btn" onClick={()=>handleFilter('publisher')}>Publisher</li>
                    </ul> */}

                    <div className='flex flex-col items-start justify-between w-full md:flex-row md:items-center '>
                        <p className='text-sm'>
                            56
                        </p>
                        <p className='flex-shrink-0 mt-3 text-sm md:mt-0'>
                            views
                        </p>

                    </div>

                    {/* tabs */}
                    <div className='flex items-center overflow-x-auto overflow-y-hidden sm:justify-start
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
                                <path d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'></path>
                            </svg>
                            <span>Read</span>
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
                                <path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'></path>
                                <path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'></path>
                            </svg>
                            <span>wishList</span>
                        </button>

                    </div>
                </div>
                {/* <Outlet /> */}

                <div>
                    {
                        tabIndex === 0 ? <Read readAll={readAll} sortBy={sortBy}></Read> : <List sortBy={sortBy}></List>
                    }
                </div>
            </article>
        </div>
    );
};

export default Listed;