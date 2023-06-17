import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const param = useParams();
  console.log('param: ', param.id);

  
  return (
    <div>Detail</div>
  )
}

export default Detail