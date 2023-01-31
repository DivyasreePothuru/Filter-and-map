import React from 'react'

function Ualbums({uAlbum}) {
  return (
   <>
   {uAlbum.length>0 && uAlbum.map((i)=>(

<div className='ualbum'>  <h1>{i.title}</h1>  </div>))}
   </>
  )
}

export default Ualbums