import { Button, Container, Nav, Navbar, Spinner } from "react-bootstrap";
import "./App.css";
import Modal from "./Components/Cardcomponents/Modal";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <h1>React with bootstrap</h1>
      <>
        <Button variant="outline-primary">Primary</Button>{" "}
        <Button variant="outline-secondary">Secondary</Button>{" "}
        <Button variant="outline-success">Success</Button> <Button variant="outline-warning">Warning</Button>{" "}
        <Button variant="outline-danger">Danger</Button> <Button variant="outline-info">Info</Button>{" "}
        <Button variant="outline-light">Light</Button> <Button variant="outline-dark">Dark</Button>
      </>
      {/* <Modal></Modal> */}
      <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="dark" />
    </div>
  );
}

export default App;
