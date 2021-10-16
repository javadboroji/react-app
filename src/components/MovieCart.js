import React from 'react'
import{ Container, Row ,Col, Button} from 'react-bootstrap'
import MovieControls from './MovieControls'
function MovieCart({movie,type}) {
    return (
        <Container>
        <Row>
            <Col md={12}>
                {
                    <>
                       <img className="img-box" src={movie.image} alt="image"/>
                       <div className="d-flex justify-content-between align-items-center">
                        <h4> {movie.title}</h4>
                        <MovieControls type={type} movie={movie}/>
                       </div>
                    </>
              }
            </Col>
        </Row>
    </Container>
    )
}

export default MovieCart
