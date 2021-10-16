import React from 'react'
import { Container, Row ,Nav,Navbar,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
    const width={width:'40%'}
    return (
        <header>
            <Container fluid >
                <Row>
                   
                    <Navbar bg="dark" variant="dark" className="d-flex justify-content-between pr-3 pl-3">
                        
                           <Link to="/">whatchList</Link>

                            <Nav className="d-flex justify-content-around" style={width}>
                                <Link className="ml-2 pt-2" to="/"> whatchList</Link>
                                <Link className="ml-3 mr-3 pt-2" to="/whatched"> whatched</Link>
                                <Link to="/add">   <Button variant="primary">Add</Button>{' '}</Link>
                            </Nav>
                       
                    </Navbar>

                </Row>
            </Container>
        </header>
    )
}

export default Header
