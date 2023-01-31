import React from 'react'

function Users({users , albumFilter}) {
  return (
    <>
    {users.length > 0 && users.map((i)=>(
      <div className='users' onClick={() => albumFilter(i.id)}>
       <h2>Username:{i.name}</h2> 
       <p>Website:{i.website}</p> 
      </div>
    )) }
    </>
  )
}

export default Users