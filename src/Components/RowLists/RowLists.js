import React, { useEffect, useState } from 'react'
import './RowLists.css'
import { originals,imageUrl } from '../../Constans/Urls';
import Axios from '../../Constans/Axios';


function RowLists() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    Axios.get(originals).then((response)=>{
      console.log(response.data);
      setPosts(response.data)
    }).catch((error) => {
      console.error('Error fetching data:', error);
    });

  }, [])
  
  return (
    <div>
      <div className="row">
        <h1 className="title">Orginals</h1>
        <div className="rowPost">
        {posts.map((obj)=>
          <img className="Posts" src={`${imageUrl+obj.backdrop_path}`} alt=''/>
        )}
        </div>
      </div>
    </div>
  )
}

export default RowLists
