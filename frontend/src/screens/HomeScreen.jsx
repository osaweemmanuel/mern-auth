import { Container, Card, Button } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

const HomeScreen = () => {
  return (
     <div className="py-5">
        <Container className="d-flex justify-content-center">
            <Card className="hero-card d-flex flex-col align-item-center bg-light w-75 p-4 ">
                <h1 className="mb-4">Mern Auth</h1>
                <p className="mb-4">This is a boilerplate for MERN authentication that stores a JWT in
                    an HTTP-Only cookie. It also uses Redux Toolkit and the React
                    Bootstrap library</p>
                    <div className="d-flex">
                        <LinkContainer to="/register">
                            <Button variant="primary" className="me-3">Register</Button>
                        </LinkContainer>
                        <LinkContainer to="/login">
                                <Button variant="secondary" className="me-3" >Login</Button>
                        </LinkContainer>
                         
                    </div>
            </Card>
        </Container>
     </div>
  )
 
}

export default HomeScreen
