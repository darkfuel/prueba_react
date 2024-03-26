import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
const MiApi = ({ inputSearch }) => {
  const [data, setData] = useState([])
  // usseEffect 1 sola llamada
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const res = await fetch('https://dogapi.dog/api/v2/breeds')
    const items = await res.json()
    setData(items)
  }
  const valid = () => {
    // console.log('valor digitado', inputSearch)
    let results = []
    if (!inputSearch) {
      return (results = data)
    } else {
      return (results = data.data.filter((dato) =>
        dato.attributes.name.toLowerCase().includes(inputSearch.toLowerCase())))
    }
  }
  const nArray = valid(data, inputSearch)
  console.log('app filtr', [nArray])
  console.log('app input', data)

  return (
    <>
      {nArray?.data?.map((item) => {
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
      <hr />
      <footer>Derechos reservados @Abel Rivas</footer>
    </>
  )
}

export default MiApi
