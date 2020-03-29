import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./App.css";
import Routes from "./Routes";
import { Auth } from "aws-amplify";

function App(props) {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  
  useEffect(() => {
    onLoad();
  }, []);
  
  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    setIsAuthenticating(false);
  }

  async function handleLogout() {
    await Auth.signOut();
  
    userHasAuthenticated(false);
  
    props.history.push("/login");
  }

  return (
    !isAuthenticating && (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">CrossB 홈</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {isAuthenticated ? (
                <>
                  <LinkContainer to="/settings">
                    <NavItem>설정</NavItem>
                  </LinkContainer>
                  <NavItem onClick={handleLogout}>로그아웃</NavItem>
                </>
              ) : (
                <>
                  <LinkContainer to="/signup">
                    <NavItem>회원가입</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <NavItem>로그인</NavItem>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
      </div>
    )
  );
}

export default withRouter(App);