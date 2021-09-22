import React from 'react'
import { Container, Row ,Nav,Navbar,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <header>
            <Container>
                <Row>
                   
                    <Navbar bg="dark" variant="dark">
                        <Container>
                           <Link to="/">whatchList</Link>
                            <Nav className=" d-flex  justify-content-around">
                                <Link to="/"> whatchList</Link>
                                <Link to="/whatched"> whatched</Link>
                                <Link to="/add">   <Button variant="primary">Add</Button>{' '}</Link>
                            </Nav>
                        </Container>
                    </Navbar>

                </Row>
            </Container>
        </header>
    )
}

export default Header
