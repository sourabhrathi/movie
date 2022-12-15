import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Movie() {
  const [data, setdata] = useState([]);
  const [item, setitem] = useState([]);
  const [search, setsearch] = useState('superman')
  const [toggle, settoggle] = useState(true)
  const fetch = () => {
    axios
      .get(`https://www.omdbapi.com/?s=${search}&apikey=4ce0b95`)
      .then((res) => {
        if(res?.data?.Search){
          settoggle(true)
          setdata(res.data.Search);
          console.log(res.data)
        }
      else{
        settoggle(false)
        setdata([{
          error:res.data.Error
        }])
        
      }
      });
  };
  useEffect(() => {
    fetch();
  }, [search]);

  const handleonchange = (e) => {
    setitem(e.target.value);
  };

  const handleonclick=()=>{
    fetch()
    setsearch(item)
    setitem('')
  }

  const handlekeypress=(e)=>{
    if(e.key==="Enter"){
      setsearch(item)
      setitem('')
    }
  }
  return (
    <>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h1>
            {search}  Movies
              <hr />
            </h1>
          </div>
        </div>
        <div className="row textAlign-center">
          <div className="col-md-8">
            <input
              className="form-control"
              onChange={handleonchange}
              value={item}
              onKeyPress={handlekeypress}
            ></input>
          </div>
          <div className="col-md-2">
            <button className="btn btn-danger" onClick={handleonclick}>search</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row my-4">
   {toggle?<>
          {data.map((value) => {
            return (
              <div className="col-md-4 my-2">
                <Link to={`/movies/${value.imdbID}/${search}`}>
                <div class="card" style={{ width: "18rem" }}>
                  <img src={value.Poster} class="card-img-top" alt="..." />
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
          })}</>:<div>{data[0].error}</div>}
        </div>
      </div>
    </>
  );
}
