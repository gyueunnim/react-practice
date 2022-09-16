/* eslint-disable */

import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet, useNavigate, Routes, Route } from 'react-router-dom';
import data from "./../db/data.js";


function Shoes({shoes}) {

	let [fade, setFade] = useState("");

	useEffect(() => {
		setTimeout(() => { setFade("end") }, 100)
		return () => { setFade("") }
	}, [])

	return (
		<div className={"start "+fade}>
		<Container>
      <Row>
				{
					shoes.map((a, i) => {
						return (
							<Card shoes={shoes} i={i} key={i}/>
						)
					})
				}
      </Row>
    </Container>
		</div>
	)
}

function Card(props) {

	let navigate = useNavigate();

	return (
		<Col onClick={()=>{navigate("/shoes/"+props.i)}}>
			<img src={"https://codingapple1.github.io/shop/shoes"+(props.i+1)+".jpg"} width="80%"/>
			<h3>{props.shoes[props.i].title}</h3>
			<h4>{props.shoes[props.i].series}</h4>
			<p>{props.shoes[props.i].price}원</p>
		</Col>
	)
}



export default Shoes;