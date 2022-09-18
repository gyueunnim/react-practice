/* eslint-disable */

import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { changName, increase, addCount } from "./../redux/store.js";
import { useEffect, useState } from 'react';

function Cart() {
  let dispatch = useDispatch();
  let state = useSelector((state) => { return state });

  let [fade, setFade] = useState("");

	useEffect(() => {
		setTimeout(() => { setFade("end") }, 100)
		return () => { setFade("") }
	}, [])

  return (
    <div className={'start '+fade}>
      <div>{state.user.name}의 장바구니</div>
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        {
          state.cart.map((a, i) => {
            return (<tr key={i}>
              <td>1</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td><button onClick={()=>{
                dispatch(addCount(state.cart[i].id));
              }}>버튼임</button></td>
            </tr>)
          }) 
        } 
      </tbody>
    </Table> 
    </div>
  )
}

export default Cart;