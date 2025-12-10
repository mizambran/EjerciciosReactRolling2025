import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';




const Footer = () => {
  return (
    <div>
        <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Dev Miguel Angel Zambrano</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Seguime en  <a href="#login">Instagram</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Footer
