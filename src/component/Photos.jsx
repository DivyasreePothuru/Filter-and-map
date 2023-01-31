import React from 'react'

function Photos({photos}) {
  return (
    <>
    {photos.length >0 && photos.map((i) =>(
      <div className='photos'>
        {i.albumId}{i.title}
      </div>
    ))}
    </>
  )
}

export default Photos