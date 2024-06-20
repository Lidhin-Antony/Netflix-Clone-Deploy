import React, { useEffect, useState } from 'react'
import './Banner.css'
import Axios from '../../Constans/Axios'
import { trending,imageUrl } from '../../Constans/Urls'

function Banner() {

    const [movie, setMovie] = useState([])
    useEffect(() => {
      Axios.get(trending).then((response)=>{
        console.log(response.data.results[0]);
        setMovie(response.data.results[0])
      }).catch((error) => {
        console.error('Error fetching data:', error);
      });
  
    }, [])


  return (
    <div>
        <div className="banner" style={{ backgroundImage:`url(${imageUrl+movie.backdrop_path})`, width: '100%',height:'100%' }} >
            <div className="content">
                <div className="title">
                    <h1>{movie.name}</h1>
                </div>
                <div className="discription">
                    <h1> {movie.overview} </h1>
                </div>
                <div className='banner_buttons'>
                    <button className="button">Play</button>
                    <button className="button">More info</button>
                </div>
            </div>
            <div className="fade"></div>
        </div>
    </div>
  )
}

export default Banner
