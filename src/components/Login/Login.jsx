import React, { useState } from "react";
import "./Login.scss";
import { Container, Col, Row, Button } from "reactstrap";
import { PASSWORD } from '../../env';

export default function Login(props) {
  
  const { setPassword } = props
  const [ pass, setPass ] = useState("")
  const [isInvalid, setIsInvalid ] =  useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault();
   
    if(PASSWORD === pass){
      setIsInvalid(false)
      setPassword(pass)
    }
    else {
      setIsInvalid(true)
      setPassword(undefined)
    }
  };

  return (
    <div className="login-body">
      <Container>
        <Row style={{ width: "100%" }}>
          <Col lg="6" sm="12" className="message">
            <h1>
              Let's <span>sign you</span> in.
            </h1>
            <h3>Welcome back.</h3>
            <h3>You've been missed!</h3>
          </Col>
          <Col lg="6" sm="12" className="inputs-section">
            <form onSubmit={handleSubmit}>
              {isInvalid && <span className="error">!! Incorrect Password</span>}
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <Button className="btn signin-btn" type="submit">
                SIGN IN
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
