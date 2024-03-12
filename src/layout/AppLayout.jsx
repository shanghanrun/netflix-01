import React from 'react'
import {Button, Container, Form, Nav, Navbar} from 'react-bootstrap';
import {Outlet} from 'react-router-dom'
import './AppLayout.style.css'

// bg="dark" data-bs-theme="dark" 
const AppLayout = () => {
  return (
	<div style={{background: 'black'}}>
		<Navbar expand="lg" >
			<Container fluid>
			<Navbar.Brand href="#">
				<img src="https://tse1.mm.bing.net/th?id=OIF.WMiyESczJVY2ycjUIA0TzQ&pid=Api&P=0&h=220" width={150} height={60} alt="로고" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="navbarScroll" />
			<Navbar.Collapse  id="navbarScroll">
				<Nav
				className="me-auto my-2 my-lg-0"
				style={{ maxHeight: '100px' }}
				navbarScroll
				>
				<Nav.Link className="home" href="/">Home</Nav.Link>
				<Nav.Link className="movies" href="/movies">Movies</Nav.Link>
				</Nav>
				<Form className="d-flex">
				<Form.Control
					type="search"
					placeholder="Search"
					className="me-2"
					aria-label="Search"
				/>
				<Button variant="danger">Search</Button>
				</Form>
			</Navbar.Collapse>
			</Container>
		</Navbar>
		<Outlet/>
	</div>
  )
}

export default AppLayout