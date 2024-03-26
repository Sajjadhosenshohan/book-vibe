import {  useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import { getBlogs } from "../components/Utility";
// import { getBlogs } from "../components/Utility";

const Listed = () => {
    
    const [tabIndex, setTabIndex] = useState(0);

    // const [showBlogs, setShowBlogs] = useState([]);

    // useEffect(()=>{
    //     const stored = getBlogs();
    //     setShowBlogs(stored);
    // },[])
    
    // const [readAll , setReadAll] = useState(bloo);
    // console.log(10,readAll);
    return (
        <div className='max-w-3xl px-6 py-16 mx-auto space-y-12 overflow-hidden'>
            <article className='space-y-8 '>
                <div className='space-y-6'>
                    <h1 className='text-4xl font-bold md:tracking-tight md:text-5xl'>
                        
                    </h1>

                    <div>
                        <li>rating</li>
                        <li>Year of</li>
                        <li>Publisher</li>
                    </div>

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
                        <Link
                            to={``}
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
                        </Link>


                        <Link
                            to={`wish`}
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
                        </Link>
                    </div>
                </div>
                <Outlet/>
            </article>
        </div>
    );
};

export default Listed;