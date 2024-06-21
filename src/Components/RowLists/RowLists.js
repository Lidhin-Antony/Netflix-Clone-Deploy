import React, { useEffect, useState } from 'react'
import './RowLists.css'
import { API_KEY, baseURL, imageUrl } from '../../Constans/Urls';
import Axios from '../../Constans/Axios';
import YouTube from 'react-youtube';
import Popup from 'reactjs-popup';


function RowLists(props) {
  const [posts, setPosts] = useState([])
  const [videoId, setVideoId] = useState('')
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    Axios.get(props.url).then((response)=>{
      setPosts(response.data.results)
    }).catch((error) => {
      alert('You must enable VPN to enjoy!!!')
      console.error('Error fetching data:', error);
    });

  }, [props])



  const popUp = (content) => (
    <Popup disabled={showPopup} trigger={<div></div>} position="right center">
      <div>{content}</div>
    </Popup>
  );


  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const movieTrailer = (id)=>{
    Axios.get(`${baseURL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if (response.data.results.length!==0) {
        setVideoId(response.data.results[0])
      } else {
        alert('The video is not available😢😢😢\n Try another video...')
        console.log('Error:',response.data.results);
      }
    }).catch((error)=>{
      console.log(error)
      alert('You must enable VPN to enjoy!!!')
    })
  }
  
  
  return (
    <div>
      <div className="row">
        <h1 className="title">{props.title}</h1>
        <div className="rowPost">
        {posts.map((obj,index)=>(
        <div key={index}>
          <div className='postDiv'>
            <img onClick={()=>movieTrailer(obj.id)} className={props.isSmall?"smallPosts":'Posts'}  src={`${imageUrl+obj.backdrop_path}`} alt=''/>
            <h4 className='postText'>{obj.name}</h4>
            <h6 className='postText'>{props.isSmall?obj.title:''}</h6>
          </div>
        </div>
        ))}
        </div>
        <div>
          {videoId && <img onClick={()=> setVideoId('')} className='cancelButton' src="https://static.vecteezy.com/system/resources/previews/018/887/460/original/signs-close-icon-png.png" alt="" />}
          {videoId && <YouTube opts={opts} videoId={videoId.key} className='youTube'/>}
        </div>
      </div>
    </div>
  )
}

export default RowLists
