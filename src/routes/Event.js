/* eslint-disable */

import { Outlet } from 'react-router-dom';

function Event() {
    return (
      <>
      <h3>Event 카테고리</h3>
      <Outlet/>
      </>
    )
}

function EventOne() {
    return (
      <>
      <p>회원가입 3000P 증정!</p>
      </>
    )
}

function EventTwo() {
    return (
      <>
      <p>첫 주문 시 슈브제 증정!</p>
      </>
    )
}


export {Event, EventOne, EventTwo};