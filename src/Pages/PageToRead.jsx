import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getBlogs } from '../components/Utility';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const PageToRead = () => {


    const books = getBlogs();

    function BookName(name) {
        // Example abbreviation logic: take the first 10 characters
        return name.length > 11 ? name.substring(0, 11) + '...' : name;
    }
    
    const chartData = books.map(book => ({
        name: BookName(book.bookName), 
        uv: book.totalPages, 
    }));



    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };
    return (
        <div style={{width: "100%", height: "80vh"}} className='flex justify-center items-center  bg-[#13131308]'>
            <BarChart 
                width={1000}
                height={400}
                data={chartData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default PageToRead;