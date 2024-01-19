import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

function News(props) {

  const[articles , setarticles] = useState([]);
  const[totalres , settotal] = useState(0);
  const[pageno , setpageno] = useState(1);
  const[loading , setloading] = useState(false);


  const handlenext = async ()=>{
    
    props.setpd(0);
    let url1 = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${pageno+1}&pagesize=${props.pagesize}`;
   
    setloading(true);
    const res = await fetch(url1);
    props.setpd(100);
    const data = await res.json();
    
    setloading(false);
    setpageno(pageno+1);
    setarticles(data.articles);
    props.setpd(100);
    props.setpd(0);

  }
  const handleprev = async ()=>{
    props.setpd(10);
    let url2 = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${pageno-1}&pagesize=${props.pagesize}`;
    
    setloading(true);
    const res = await fetch(url2);
    props.setpd(100);
    const data = await res.json();
    
    setloading(false);
    setpageno(pageno-1);
    setarticles(data.articles);
    
    
  }
  
  const fetchDetails = async ()=>{
    props.setpd(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&pagesize=${props.pagesize}`;
    
    setloading(true);
    const res = await fetch(url);
    props.setpd(30);
    const data = await res.json();
    props.setpd(100);
    setloading(false);
    
    setarticles(data.articles);
    settotal(data.totalResults);
   
   
  }
  useEffect(()=>{
      document.title = `NewsMonkey - ${props.category}`;
      fetchDetails();
     
  } , []);

  return (
    <div className="container" style={{marginTop : '70px'}}>
      <h1 className="text-center my-3" >Top Headlines - {props.category}</h1>
      {loading && <Spinner/>}
      <div className="row">
      {!loading && articles.map((element)=>{
          return <div className="col-md-4 my-2" key = {element.url}>
            <NewsItem className="text-truncate" title = {element.title !== "[Removed]" ? element.title : "Tesla снизила цену на бета-версию Full Self-Driving до $12 000"} description = {element.description !== "[Removed]"  ? element.description : "Компания Tesla снизила стоимость бета-версии системы для беспилотного вождения Full Self-Driving (FSD) в Северной Америке на 20% &mdash; до $12 000."} urlImg = {element.urlToImage ? element.urlToImage : "https://content.fortune.com/wp-content/uploads/2023/09/6YxjN-inventory-shift-between-august-2019-and-august-2023-1.png?resize=1200,600"}
            urlNews ={element.url} author={element.author} date = {new Date(element.publishedAt).toGMTString()} source = {element.source.name}/>
          </div>
      })}
    
      </div>

      <div className="container d-flex justify-content-between">
      <button disabled = {pageno <= 1} type="button" className="btn btn-dark" onClick={handleprev}>&larr; Previous</button>
      <button disabled= {pageno+1 > Math.ceil(totalres/props.pagesize)}type="button" className="btn btn-dark" onClick={handlenext}>Next &rarr;  </button>
      </div>
    </div>
  );
}

export default News;
