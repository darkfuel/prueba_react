import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
const MiApi = ({ inputSearch }) => {
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
  const valid = ({ data, inputSearch }) => {
    console.log('valor digitado', inputSearch)
    let results = {}
    if (!inputSearch) {
      results = data
      console.log('en blanco')
    } else {
      console.log('valor en MiApi', data.data)
      results = data.data.filter((dato) =>
        dato.attributes.name.toLowerCase().includes(inputSearch.toLowerCase()))
      console.log('escrito')
      console.log('valid', results)
    }
  }
  valid({ data, inputSearch })
  // console.log('app input', inputSearch)
  return (
    <>
      {data?.data?.map((item) => {
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
      <hr />
      <footer>Derechos reservados @Abel Rivas</footer>
    </>
  )
}

export default MiApi
