import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
const MiApi = () => {
  const [data, setData] = useState({})
  // usseEffect 1 sola llamada
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const res = await fetch('https://dogapi.dog/api/v2/breeds')
    const items = await res.json()
    setData(items)
  }
  return (
    <>
      {data?.data?.map((item) => {
        console.log(item)
        return (
          <React.Fragment key={item.id}>
            <Accordion defaultActiveKey='0'>
              <Accordion.Item eventKey='0'>
                <Accordion.Header>{item.attributes.name}</Accordion.Header>
                <Accordion.Body>{item.attributes.description}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default MiApi
