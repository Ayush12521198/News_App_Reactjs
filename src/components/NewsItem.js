
import React from 'react';
import '../App.css';

const truncateText = (text, wordLimit) => {
    if (!text) return '';
    const words = text.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
};

const NewsItem = (props) => {
    let { title, desc, imageUrl, url, dateTime, author, source } = props;

   
    const totalWords = 60;
    const titleWordsLimit = 20;
    const descWordsLimit = totalWords - titleWordsLimit;

    const truncatedTitle = truncateText(title, titleWordsLimit);
    const truncatedDesc = truncateText(desc, descWordsLimit);

    return (
        <div className="news-card">
            <div className="card h-100">
                <img src={imageUrl} className="card-img-top" alt="News" style={{ objectFit: 'cover', height: '50%' }} />
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">{truncatedTitle}</h5>
                    <p className="card-text">{truncatedDesc}</p>

                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ right: '-30px', zIndex: '1' }}>{source}</span>

                    <p className="card-text"><small className="text-muted">Published by: {author ? author : "Unknown"} on {new Date(dateTime).toGMTString().slice(0, 22)}</small></p>
                    <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm custom-read-more">Read more</a>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;


