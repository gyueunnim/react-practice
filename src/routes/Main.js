/* eslint-disable */

import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Main() {
    let navigate = useNavigate();
    return (
      <div className="main-bg">
        <h1 className="main-title">FASHIWEB</h1>
        <Button className="main-btn" variant="outline-light" onClick={() => { navigate('/login') }}>LOGIN</Button>
      </div>
    )
  }
  
  export default Main;
  