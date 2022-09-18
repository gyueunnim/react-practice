/* eslint-disable */

import './App.css';

import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, Outlet } from 'react-router-dom';
import Main from './routes/Main.js';
import Shoes from './routes/Shoes.js';
import Detail from './routes/Detail.js';
import Cart from './routes/Cart.js';
import data from "./db/data.js";
import Login from "./routes/Login.js";
import Brand from "./routes/Brand.js";
import Style from "./routes/Style.js";
import { Event,EventOne, EventTwo } from "./routes/Event.js";
import { About, AboutCompany, AboutMember } from './routes/About.js';

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
            <Nav.Link onClick={()=>{ navigate("/about") }}>About us</Nav.Link>
            <Nav.Link onClick={()=>{ navigate("/shoes") }}>Shoes</Nav.Link>
            <Nav.Link onClick={()=>{ navigate("/style") }}>Style</Nav.Link>
            <Nav.Link onClick={()=>{ navigate("/brand") }}>Brand</Nav.Link>
            <Nav.Link onClick={()=>{ navigate("/upcomming") }}>Upcomming</Nav.Link>
            <Nav.Link onClick={()=>{ navigate("/event") }}>Event</Nav.Link>
          </Nav>
          <Nav className='ms-auto'><Button variant="outline-dark" style={{marginRight: "10px"}} onClick={() => { navigate("/cart") }}>Cart</Button></Nav>
          <Nav><Button variant="dark" onClick={() => { navigate("/login") }}>Login</Button></Nav>
        </Container>
      </Navbar>

    
      <Routes>
        <Route path="/" element={ <Main /> }/>

        <Route path="/login" element={ <Login /> }/>

        <Route path="/style" element={ <Style/> }/>

        <Route path="/shoes" element={ <Shoes shoes={shoes} setShoes={setShoes}/> }/>

        <Route path="/shoes/:id" element={ <Detail shoes={shoes}/> }/>

        <Route path="/brand" element={ <Brand/> }/>

        <Route path="/upcomming" element={ <h3>Upcomming 카테고리</h3> }/>

        <Route path="/cart" element={ <Cart/> }/>

        <Route path="/event" element={ <Event/> }>
          <Route path="one" element={ <EventOne/> } />
          <Route path="two" element={ <EventTwo/> } />
        </Route>

        <Route path="/about" element={ <About/> }>
          <Route path="company" element={ <AboutCompany/> } />
          <Route path="member" element={ <AboutMember/>} />
        </Route>
      </Routes>
      
    </div>
  );
}





export default App;
