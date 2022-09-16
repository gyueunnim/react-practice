/* eslint-disable */

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Navbar, Nav, Button } from 'react-bootstrap';
import TabContent from "./TabContent";

function Detail(props) {

	// let a = useSelector((state) => { return state });
	// console.log(a.data);

	let [alertEvent, setAlertEvent] = useState(true);
	let [tab, setTab] = useState(0);

	let [fade, setFade] = useState("");

	let {id} = useParams();
	let findShoe = props.shoes.find((x) => {
		return x.id == id;
	});

	useEffect(() => {
		setTimeout(() => { setFade("end") }, 100)
		return () => { setFade("") }
	}, []);

	useEffect(()=> { 
		setTimeout(() => { setAlertEvent(false) }, 2000)
		return clearTimeout();
	}, []);

	return (
		<div className={"container start "+fade}>
			{	
				alertEvent === true ?
				<div className="alert alert-warning">
					2초이내 구매시 할인
				</div> : null
			}
			<div className="row">
				<div className="col-md-6">
					<img src={"https://codingapple1.github.io/shop/shoes"+(findShoe.id+1)+".jpg"} width="100%" />
				</div>
				<div className="col-md-6 mt-4">
					<h3 className="pt-5">{findShoe.title}</h3>
					<h4>{findShoe.series}</h4>
					<p>{findShoe.content}</p>
					<p>{findShoe.price}원</p>
					<Button variant="danger" style={{marginRight: "10px"}}>주문하기</Button>
					<Button variant="outline-danger">장바구니 담기</Button>
				</div>
			</div> 

			<Nav variant="tabs" defaultActiveKey="link0">
				<Nav.Item>
					<Nav.Link eventKey="link0" onClick={()=>{ setTab(0); }}>상세 정보</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link1" onClick={()=>{ setTab(1); }}>사이즈 추천</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link2" onClick={()=>{ setTab(2); }}>스타일링</Nav.Link>
				</Nav.Item>
    	</Nav>

			<TabContent tab={tab} shoe={findShoe}/>

		</div>
	)
}


export default Detail;