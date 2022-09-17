/* eslint-disable */

import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Outlet, useNavigate, Routes, Route } from 'react-router-dom';
import data from "./../db/data.js";
import axios from 'axios';

function Shoes({shoes, setShoes}) {

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
						return ( i % 3 === 0 ?
							<><div></div><Card shoes={shoes} i={i} key={i}/></> 
              : <Card shoes={shoes} i={i} key={i}/>
						)
					})
				}
			</Row>
		</Container>
		<Button variant="outline-danger" onClick={() => {
			axios.get('https://codingapple1.github.io/shop/data2.json')
			.then((result) => {
				let copy = [...shoes, ...result.data];
				setShoes(copy);
			})
			.catch(() => {
				console.log('실패함');
			})
		}}>더보기</Button>
		</div>
	)
}

function Card(props) {

	let navigate = useNavigate();

	return (
		<Col onClick={()=>{navigate("/shoes/"+props.i)}}>
			<div className="card-cursor"> 
			<img src={"https://codingapple1.github.io/shop/shoes"+(props.i+1)+".jpg"} width="80%"/>
			<h3>{props.shoes[props.i].title}</h3>
			<h4>{props.shoes[props.i].series}</h4>
			<p>{props.shoes[props.i].price}원</p>
			</div>
		</Col>
	)
}



export default Shoes;