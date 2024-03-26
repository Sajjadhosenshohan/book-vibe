// import { useState } from "react";
// import { useState } from "react";
import Sort from "./Sort";
import { getBlogs } from "./Utility";

const Read = () => {
    const bloo = getBlogs()
    console.log(bloo);

    // const [readAll, setReadAll] = useState(bloo);

    // const handleFilter = filter =>{
    //     if(filter === 'rating'){
    //         const rating = readAll.filter(book => book.rating)
    //         setReadAll(rating)
    //     }
    // }

    
    return (
        <div>
            {
                bloo.map(b => <Sort key={b.bookid} b={b}></Sort>)
            }
        </div>
    );
};

export default Read;