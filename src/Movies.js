import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Movies() {
  const { id } = useParams();
  const {search} = useParams();
  const [data, setdata] = useState([]);
  const [data1, setdata1] = useState([])
  const fetch = () => {
    axios.get(`https://www.omdbapi.com/?i=${id}&apikey=4ce0b95`).then((res) => {
      setdata(res.data);
      console.log(res.data);
    });
  };

  const fetch2=()=>{
    axios.get(`https://www.omdbapi.com/?s=${search}&apikey=4ce0b95`)
    .then(res=>{
        setdata1(res.data.Search)
    })
  }
  useEffect(() => {
    fetch();
    fetch2();
  }, [search]);
  return (
    <>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h1>Movies</h1>
          </div>
        </div>
      </div>
      <div className="container bg-dark mt-2 p-2 text-light">
        <div className="row">
          <div className="col-md-12"></div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <img src={data.Poster} alt="..."></img>
          </div>
          <div className="col-md-7">
            <p>Type: &emsp;{data.Type}</p>
            <p>Title:&emsp; {data.Title}</p>
            <p>Year: &emsp;{data.Year}</p>
            <p>Writer:&emsp; {data.Writer}</p>
            <p>Actors:&emsp; {data.Actors}</p>
            <p>Award: &emsp;{data.Awards}</p>
            <p>Director:&emsp; {data.Director}</p>
            <p>Language:&emsp; {data.Language}</p>
            <p>Rated: &emsp;{data.Rated}</p>
            <p>Runtime: &emsp;{data.Runtime}</p>
            <p>Rating:&emsp;{data.imdbRating}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1>Related Movies</h1>
            </div>
            
        </div>
    
      </div>
      <div className="container">
        <div className="row my-4">
          {data1.map((value) => {
            return (
              <div className="col-md-4 my-2">
                <Link to={"/"}>
                <div class="card" style={{ width: "18rem" }}>
                  <img src={!value.Poster?"https://www.bing.com/images/search?view=detailV2&ccid=7jCPVQwA&id=9C1ED448080FAE8EF935E78B4E24D15D9858F671&thid=OIP.7jCPVQwAz5YrVwKUIL0laAHaHi&mediaurl=https%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-supermansupermanfictional-superherocomic-booksdc-comicscharacterjerry-siegelson-of-kryptonaction-comicsman-of-steel-1701528657773h7pka.png&exph=935&expw=919&q=superman+image&simid=607994127745314811&FORM=IRPRST&ck=0477981CE05E9AE3C3BE7716C89114C5&selectedIndex=1&ajaxhist=0&ajaxserp=0":value.Poster} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{value.Title}</h5>
                    <p class="card-text">
                   {value.Type}-{value.Year}
                    </p>
                   
                  </div>
                </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
