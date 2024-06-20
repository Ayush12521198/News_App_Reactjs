// import React, { useState, useEffect } from 'react';
// import NewsItem from './NewsItem';
// import Spinner from './Spinner';
// import LoadingBar from 'react-top-loading-bar';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// const News = (props) => {
//     const [articles, setArticles] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalResults, setTotalResults] = useState(0);
//     const [progress, setProgress] = useState(0);
//     const [pageSize] = useState(15); // Set page size to 15

//     useEffect(() => {
//         fetchNews(currentPage);
//     }, [currentPage]);

//     const fetchNews = async (page) => {
//         try {
//             setProgress(40);
//             setLoading(true);
//             const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${pageSize}&page=${page}`;
//             const response = await fetch(url);
//             const data = await response.json();
//             setArticles(data.articles);
//             setTotalResults(data.totalResults);
//             setLoading(false);
//             setProgress(100);
//         } catch (error) {
//             console.error('Error fetching news:', error);
//             setLoading(false);
//         }
//     };

//     const totalPages = Math.ceil(totalResults / pageSize);

//     const handlePageClick = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     const renderPageNumbers = () => {
//         const pageNumbers = [];
//         for (let i = 1; i <= totalPages; i++) {
//             pageNumbers.push(
//                 <button
//                     key={i}
//                     className={`btn btn-link ${currentPage === i ? 'text-primary' : ''}`}
//                     onClick={() => handlePageClick(i)}
//                 >
//                     {i}
//                 </button>
//             );
//         }
//         return pageNumbers;
//     };

//     return (
//         <>
//             <LoadingBar
//                 color='#ff0000'
//                 progress={progress}
//                 height={5}
//             />
//             <div className='container my-3'>
//                 <div className="cards-container" style={{ marginTop: '80px' }}>
//                     {articles.map((element) => {
//                         let placeholder = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-design-template-bd73c9b9180d60c8d677aae7e7495d7f_screen.jpg?ts=1593284625";
//                         return (
//                             <NewsItem
//                                 key={element.url}
//                                 title={element.title}
//                                 desc={element.description}
//                                 imageUrl={element.urlToImage ? element.urlToImage : placeholder}
//                                 url={element.url}
//                                 dateTime={element.publishedAt}
//                                 author={element.author}
//                                 source={element.source.name}
//                             />
//                         );
//                     })}
//                 </div>
//             </div>
//             <div className="pagination-controls text-center mt-3">
//                 <button
//                     className="btn btn-primary mx-1"
//                     onClick={() => handlePageClick(currentPage - 1)}
//                     disabled={currentPage === 1}
//                 >
//                     <FaChevronLeft />
//                 </button>
//                 {renderPageNumbers()}
//                 <button
//                     className="btn btn-primary mx-1"
//                     onClick={() => handlePageClick(currentPage + 1)}
//                     disabled={currentPage === totalPages || articles.length === 0 || articles.length < pageSize || articles.length >= totalResults}
//                 >
//                     <FaChevronRight />
//                 </button>
//             </div>
//             {loading && <Spinner />}
//         </>
//     );
// };

// News.defaultProps = {
//     category: 'general',
//     country: 'in',
// };

// export default News;






import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import LoadingBar from 'react-top-loading-bar';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [progress, setProgress] = useState(0);
    const [pageSize] = useState(15); // Set page size to 15

    useEffect(() => {
        fetchNews(currentPage);
    }, [currentPage]);

    const fetchNews = async (page) => {
        try {
            setProgress(40);
            setLoading(true);
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${pageSize}&page=${page}`;
            const response = await fetch(url);
            const data = await response.json();
            console.log('Fetched data:', data); // Debug log
            setArticles(data.articles || []);
            setTotalResults(data.totalResults || 0);
            setLoading(false);
            setProgress(100);
        } catch (error) {
            console.error('Error fetching news:', error);
            setLoading(false);
        }
    };

    const totalPages = Math.ceil(totalResults / pageSize);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    className={`btn btn-link ${currentPage === i ? 'text-primary' : ''}`}
                    onClick={() => handlePageClick(i)}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <>
            <LoadingBar
                color='#ff0000'
                progress={progress}
                height={5}
            />
            <div className='container my-3'>
                <div className="cards-container" style={{ marginTop: '80px' }}>
                    {articles.map((element) => {
                        console.log('Rendering article:', element); // Debug log
                        let placeholder = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-design-template-bd73c9b9180d60c8d677aae7e7495d7f_screen.jpg?ts=1593284625";
                        return (
                            <NewsItem
                                key={element.url}
                                title={element.title || "No title available"}
                                desc={element.description || "No description available"}
                                imageUrl={element.urlToImage ? element.urlToImage : placeholder}
                                url={element.url || "#"}
                                dateTime={element.publishedAt || "No date available"}
                                author={element.author || "Unknown author"}
                                source={element.source && element.source.name ? element.source.name : "Unknown source"}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="pagination-controls text-center mt-3">
                <button
                    className="btn btn-primary mx-1"
                    onClick={() => handlePageClick(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <FaChevronLeft />
                </button>
                {renderPageNumbers()}
                <button
                    className="btn btn-primary mx-1"
                    onClick={() => handlePageClick(currentPage + 1)}
                    disabled={currentPage === totalPages || articles.length === 0 || articles.length < pageSize || articles.length >= totalResults}
                >
                    <FaChevronRight />
                </button>
            </div>
            {loading && <Spinner />}
        </>
    );
};

News.defaultProps = {
    category: 'general',
    country: 'in',
};

export default News;
