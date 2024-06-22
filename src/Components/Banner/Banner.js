import React, { useEffect, useState } from 'react'
import './Banner.css'
import Axios from '../../Constans/Axios'
import { trending,imageUrl, baseURL, API_KEY } from '../../Constans/Urls'
import YouTube from 'react-youtube'
import Swal from 'sweetalert2'


function Banner() {

    const [movie, setMovie] = useState([])
    const [videoId, setVideoId] = useState('')
    
    useEffect(() => {
      Axios.get(trending).then((response)=>{
        setMovie(response.data.results[0])
      }).catch((error) => {
        Swal.fire({
          title: "You must enable VPN to enjoy!!!",
          width: 500,
          padding: "1em",
          color: "red",
          background: "#fff ",
          backdrop: `rgba(255, 0, 0, 0.25)`
        });
        console.error('Error fetching data:', error)
      });
  
    }, [])



    const movieTrailer = (id)=>{
      Axios.get(`${baseURL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        if (response.data.results.length!==0) {
          setVideoId(response.data.results[0])
        } else {
          console.log('Error:',response.data.results);
        }
      }).catch((error)=>{
        console.log(error)
        Swal.fire({
          title: "You must enable VPN to enjoy!!!",
          width: 500,
          padding: "1em",
          color: "red",
          background: "#fff ",
          backdrop: `rgba(255, 0, 0, 0.25)`
        });
      })
    }

    
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        autoplay: 1,
      },
    };





  return (
    <div>
        <div className="banner" style={{ backgroundImage:`url(${imageUrl+movie.backdrop_path})`, width: '100%',height:'100%' }} >
            <div className="content">
                <div className="title">
                    <h1>{movie.title}</h1>
                </div>
                <div className="discription">
                    <h1> {movie.overview} </h1>
                </div>
                <div className='banner_buttons'>
                    <button onClick={()=>movieTrailer(movie.id)} className="button">Play</button>
                    <button className="button">More info</button>
                </div>
            </div>
            <div className="fade"></div>
        </div>
        <div>
          {videoId && <img onClick={()=> setVideoId('')} className='cancelButton' src="https://static.vecteezy.com/system/resources/previews/018/887/460/original/signs-close-icon-png.png" alt="" />}
          {videoId && <YouTube opts={opts} videoId={videoId.key} className='youTube'/>}
        </div>
    </div>
  )
}

export default Banner
