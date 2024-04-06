import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {Button, Container, Form, Nav, Navbar} from 'react-bootstrap';
import {Outlet} from 'react-router-dom'
import './AppLayout.style.css'

// bg="dark" data-bs-theme="dark" 
const AppLayout = () => {
	const [keyword, setKeyword] = useState('')
	const navigate = useNavigate()
	const searchByKeyword=(e)=>{
		e.preventDefault()
		// keyword로 url 바꿔주기
		navigate(`/movies?q=${keyword}`)
		setKeyword('')
		// 
	}
  return (
	<div style={{background: 'black'}}>
		<Navbar  expand="lg" >
			<Container fluid>
			<Navbar.Brand href="/">
				<img src="netflix.webp" width={150} height={60} alt="로고" />
				{/* <img src="https://tse1.mm.bing.net/th?id=OIF.WMiyESczJVY2ycjUIA0TzQ&pid=Api&P=0&h=220" width={150} height={60} alt="로고" /> */}
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
				<Form className="d-flex" onSubmit={searchByKeyword}>
					<Form.Control
						type="search"
						placeholder="Search"
						className="me-2"
						aria-label="Search"
						value={keyword}
						onChange={(e)=>setKeyword(e.target.value)}
					/>
					<Button variant="danger" type="submit">Search</Button>
				</Form>
			</Navbar.Collapse>
			</Container>
		</Navbar>
		<Outlet/>
	</div>
  )
}

export default AppLayout