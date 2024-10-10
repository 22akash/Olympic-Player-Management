import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navig() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="me-auto" href="/">Olympics - Player - Management - System</Navbar.Brand>
          <Nav className="ms-auto mx-10">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/players">Players</Nav.Link>
            <Nav.Link href="/create">Add Player</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default Navig;