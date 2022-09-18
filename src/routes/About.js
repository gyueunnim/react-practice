/* eslint-disable */

import { Outlet } from 'react-router-dom';

function About() {
    return (
      <>
      <h3>소개 페이지</h3>
      <Outlet/>
      </>
    )
}

function AboutCompany() {
    return (
        <p>회사 소개</p>
    )
}

function AboutMember() {
    return (
        <p>멤버 소개</p>
    )
}

export {About, AboutCompany, AboutMember};