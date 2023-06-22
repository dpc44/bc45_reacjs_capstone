import React, { useEffect, useState } from 'react'
import axios from 'axios'


  const useGetApi = (url) => {
      const [result,setResult] = useState([]);
      const getApi = async () =>{

        let res = await axios ({
            url:url,
            method:'GET'
        })

        setResult(res.data.content)
    }


    useEffect(()=>{
        getApi();
    },[])

  return result;
}

export default useGetApi