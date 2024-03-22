import React, { useEffect, useState } from 'react'
const MiApi = () => {
  const [data, setData] = useState('')
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const datos = await fetch('https://jsonplaceholder.typicode.com/users')
    const album = await datos.json()
    console.log(album)
    setData(album)
  }

  return (
    <>
      <ul>
        {
            [data].map(item => (
              <li key={item.id}>{item.name}</li>
            ))
        }
      </ul>
    </>
  )
}

export default MiApi
