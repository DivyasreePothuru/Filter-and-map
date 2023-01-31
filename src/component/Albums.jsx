import React from 'react'

function Albums({albums, photoFilter }) {
  return (
    <>
       {albums.length>0 && albums.map((i) => (
      <div className='albums' onClick={() =>photoFilter(i.userId)}>
        {i.userId}{i.title}
      </div>
    ))}
    </>
  )
}

export default Albums