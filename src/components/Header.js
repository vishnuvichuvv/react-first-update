import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://i.postimg.cc/QCbMWWt0/classic-cheeseburger-vector-logo-fastfood-restaurant-black-background-518698-131.webp"
              width="60"
              height="50"
              className="d-inline-block align-top"
            />
            {' '}
            <b className='p-3'>Hot & Spicy</b>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header