import React from 'react'

function Uphotos({uPhotos}) {
  return (
    <>
    {uPhotos.length>0 && uPhotos.map((i)=>(

<div className='uphotos'>  <img src={i.thumbnailUrl}  />  </div>))}
    </>
  )
}

export default Uphotos