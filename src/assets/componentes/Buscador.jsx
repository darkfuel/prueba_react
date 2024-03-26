import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react'

function NavSearch ({ inputSearch, setInputSearch }) {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container fluid>
        <Navbar.Brand href='http://localhost:5173/'>DOGs of the World</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          />
          <Form className='d-flex'>
            <Form.Control
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
              value={inputSearch}
              onChange={e => setInputSearch(e.target.value)}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavSearch
