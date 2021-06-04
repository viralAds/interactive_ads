import React, { useState } from "react";
import "./Login.scss";
import { Container, Col, Row, Button } from "reactstrap";
import PropTypes from "prop-types";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [password, setPassword] = useState("");
  const [isInvalid, setIsInvalid ] =  useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      password,
    });
   
    if(token.token === password){
      setIsInvalid(false)
      setToken(token);
    }
    else {
      setIsInvalid(true)
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
