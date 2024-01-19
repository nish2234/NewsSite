import React from "react";

function NewsItem(props) {
  return (
    <div>
      <div className="card">
        <span className="position-absolute badge rounded-pill bg-primary" style={{right : '0'}}>
          {props.source}
          <span className="visually-hidden">unread messages</span>
        </span>
        <img src={props.urlImg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {props.author === null ? "Unknown" : props.author} on{" "}
              {props.date}
            </small>
          </p>
          <a href={props.urlNews} target="_blank" className="btn btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
