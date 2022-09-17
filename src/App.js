/* eslint-disable */

import './App.css';

import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, Outlet } from 'react-router-dom';
import Shoes from './routes/Shoes.js';
import Detail from './routes/Detail.js';
import Cart from './routes/Cart.js';
import data from "./db/data.js";
import Login from "./routes/Login.js";


function App() {

  let navigate = useNavigate();
  let [shoes, setShoes] = useState(data);

  let [fade, setFade] = useState("");

	useEffect(() => {
		setTimeout(() => { setFade("end") }, 100)
		return () => { setFade("") }
	}, [])

  useEffect(() => {
    let cartItem = localStorage.getItem('watched');
    cartItem = JSON.parse(cartItem);
    cartItem.push(cartItem.id)
    localStorage.setItem('watched', JSON.stringify([]))
  }, []);


  return (
    <div className={"App start "+fade}>
    

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand className="cursor" onClick={()=>{ navigate("") }}>FASHIWEB</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate("/style") }}>Style</Nav.Link>
            <Nav.Link onClick={()=>{ navigate("/shoes") }}>Shoes</Nav.Link>
            <Nav.Link onClick={()=>{ navigate("/brand") }}>Brand</Nav.Link>
            <Nav.Link onClick={()=>{ navigate("/upcomming") }}>Upcomming</Nav.Link>
            <Nav.Link onClick={()=>{ navigate("/cart") }}>Cart</Nav.Link>
            <Nav.Link onClick={()=>{ navigate("/event") }}>Event</Nav.Link>
            <Nav.Link onClick={()=>{ navigate("/about") }}>About</Nav.Link>
          </Nav>
          <Nav className='ms-auto'><Button variant="outline-secondary" onClick={() => { navigate("/login") }}>Login</Button></Nav>
        </Container>
      </Navbar>

    
      <Routes>
        <Route path="/" element={ <Main /> }/>

        <Route path="/login" element={ <Login /> }/>

        <Route path="/style" element={ <h3>Style 카테고리</h3> }/>

        <Route path="/shoes" element={ <Shoes shoes={shoes} setShoes={setShoes}/> }/>

        <Route path="/shoes/:id" element={ <Detail shoes={shoes}/> }/>

        <Route path="/brand" element={ <h3>Brand 카테고리</h3> }/>

        <Route path="/upcomming" element={ <h3>Upcomming 카테고리</h3> }/>

        <Route path="/cart" element={ <Cart/> }/>

        <Route path="/event" element={ <Event/> }>
          <Route path="one" element={ <p>회원가입 3000P 증정!</p>} />
          <Route path="two" element={ <p>첫 주문 시 슈브제 증정!</p>} />
        </Route>

        <Route path="/about" element={ <About/> }>
          <Route path="company" element={ <p>회사 소개</p>} />
          <Route path="member" element={ <p>멤버 소개</p>} />
        </Route>
      </Routes>
      

    </div>
  );
}

function Main() {
  let navigate = useNavigate();
  return (
    <div className="main-bg">
      <h1 className="main-title">FASHIWEB</h1>
      <Button className="main-btn" variant="outline-light" onClick={() => { navigate('/login') }}>LOGIN</Button>
    </div>
  )
}

function Event() {
  return (
    <>
    <h3>Event 카테고리</h3>
    <Outlet/>
    </>
  )
}

function About() {
  return (
    <>
    <h3>소개 페이지</h3>
    <Outlet/>
    </>
  )
}

export default App;
