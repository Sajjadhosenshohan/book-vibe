
import toast from 'react-hot-toast';

// get data to local storage

export const getBlogs = () => {
    let blogs = []

    const storedBlogs = localStorage.getItem('read')

    if (storedBlogs) {
        blogs = JSON.parse(storedBlogs)
    }
    return blogs;
}
export const saveBlog = (SingleBook) => {
    // console.log(SingleBook);
    let allBlogs = getBlogs()

    const isExist = allBlogs.find(b => b.bookid === SingleBook.bookid)

    if (isExist) {
        return toast.error('already ace vai')
    }
    allBlogs.push(SingleBook)
    localStorage.setItem('read', JSON.stringify(allBlogs))
    toast.success('add korlam vai')
}

// wishList
export const getBook2 = () => {
    let books = []

    const storedBlogs = localStorage.getItem('wishList')

    if (storedBlogs ) {
        books = JSON.parse(storedBlogs)
    }
    return books;
}

export const ListSaveBlog = (SingleBook) => {
    // console.log(SingleBook);
    let allBooks = getBook2()
    const isExist = allBooks.find(b => b.bookid === SingleBook.bookid)

    if (isExist) {

        return toast.error('already ace vai read a')
    }
    else{
        allBooks.push(SingleBook)
        localStorage.setItem('wishList', JSON.stringify(allBooks))
        toast.success('add korlam vai')
    }
}

// save data to local storage

// delete
// export const deleteBlog = id => {
//     let blogs = getBlogs()
//     const remaining = blogs.filter(b => b.bookid !== id)
//     localStorage.setItem('books', JSON.stringify(remaining))
//     // toast.success('Blog Removed from Bookmark!')
//     alert('delete korlam')
//   }
