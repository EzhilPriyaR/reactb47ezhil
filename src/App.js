import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Col, Row, ListGroup, Button } from 'react-bootstrap';

/* const are used for styling the card and list */

const cardPrice = {
  fontSize: 32,
};

const period = {
  fontSize: 16,
};

const listBorder = {
  border: "none",
};

const buttonStyle = {
  borderRadius: 20,
  letterSpacing: 2,
  fontWeight: "bold",
  padding: 10,
  opacity: 0.8,
};

const cardStyle = {
  border: "none",
  borderRadius: 30,
};

/* it is used to render the  free list items */
function FirstList() {
  return (
    <ListGroup>
      <ListGroup.Item style={listBorder}><strong> ✓ </strong> Single User</ListGroup.Item>
      <ListGroup.Item style={listBorder}><strong> ✓ </strong> 5GB Storage</ListGroup.Item>
      <ListGroup.Item style={listBorder}><strong> ✓ </strong> Unlimited Public Projects</ListGroup.Item>
      <ListGroup.Item style={listBorder}><strong> ✓ </strong> Community Access</ListGroup.Item>
      <ListGroup.Item disabled style={listBorder}>✘ Unlimited Private Projects</ListGroup.Item>
      <ListGroup.Item disabled style={listBorder}>✘ Dedicated Phone Support</ListGroup.Item>
      <ListGroup.Item disabled style={listBorder}>✘ Free Subdomain</ListGroup.Item>
      <ListGroup.Item disabled style={listBorder}>✘ Monthly Status Reports</ListGroup.Item>
    </ListGroup>
  );
}

/* it is used to render the plus list items */
function SecondList() {
  return (
    <ListGroup>
      <ListGroup.Item style={listBorder}><strong> ✓  5 Users</strong></ListGroup.Item>
      <ListGroup.Item style={listBorder}><strong> ✓ </strong> 50GB Storage</ListGroup.Item>
      <ListGroup.Item style={listBorder}><strong> ✓ </strong> Unlimited Public Projects</ListGroup.Item>
      <ListGroup.Item style={listBorder}><strong> ✓ </strong> Community Access</ListGroup.Item>
      <ListGroup.Item style={listBorder}><strong> ✓ </strong> Unlimited Private Projects</ListGroup.Item>
      <ListGroup.Item style={listBorder}><strong> ✓ </strong> Dedicated Phone Support</ListGroup.Item>
      <ListGroup.Item style={listBorder}><strong> ✓ </strong> Free Subdomain</ListGroup.Item>
      <ListGroup.Item disabled style={listBorder}>✘ Monthly Status Reports</ListGroup.Item>
    </ListGroup>
  );
}

/* it is used to render the pro list items */
function ThirdList() {
  return (
    <ListGroup>
      <ListGroup.Item style={listBorder}><strong> ✓ Unlimited User</strong></ListGroup.Item>
      <ListGroup.Item style={listBorder}><strong> ✓ </strong>150GB Storage</ListGroup.Item>
      <ListGroup.Item style={listBorder}><strong> ✓ </strong>Unlimited Public Projects</ListGroup.Item>
      <ListGroup.Item style={listBorder}><strong> ✓ </strong>Community Access</ListGroup.Item>
      <ListGroup.Item style={listBorder}><strong> ✓ </strong>Unlimited Private Projects</ListGroup.Item>
      <ListGroup.Item style={listBorder}><strong> ✓ </strong>Dedicated Phone Support</ListGroup.Item>
      <ListGroup.Item style={listBorder}><strong>✓ Unlimited </strong>Free Subdomain</ListGroup.Item>
      <ListGroup.Item style={listBorder}><strong> ✓ </strong>Monthly Status Reports</ListGroup.Item>
    </ListGroup>
  );
}

/* it is used to render price button */
function PriceButton() {
  return (
    <div class="d-grid">
      <Button variant="primary" size="lg" style={buttonStyle}>BUTTON</Button>
    </div>
  );
}

/* it is used to render free card */
function FirstCard() {
  return (
    <Col col-lg-4>
      <Card mb-5 mb-lg-0 style={cardStyle}>
        <Card.Body >
          <h5 class="card-title text-muted text-center">Free</h5>
          <h6 class="card-price text-center" style={cardPrice}>$0<span class="period" style={period}>/month</span></h6>
          <hr></hr>
          <FirstList />
          <PriceButton />
        </Card.Body>
      </Card>
    </Col>
  );
}

/* it is used to render plus card */
function SecondCard() {
  return (
    <Col col-lg-4>
      <Card mb-5 mb-lg-0 style={cardStyle}>
        <Card.Body >
          <h5 class="card-title text-muted text-center">Plus</h5>
          <h6 class="card-price text-center" style={cardPrice}>$9<span class="period" style={period}>/month</span></h6>
          <hr></hr>
          <SecondList />
          <PriceButton />
        </Card.Body>
      </Card>
    </Col>
  );
}

/* it is used to render the pro card */
function ThirdCard() {
  return (
    <Col col-lg-4>
      <Card mb-5 mb-lg-0 style={cardStyle}>
        <Card.Body >
          <h5 class="card-title text-muted text-center">Pro</h5>
          <h6 class="card-price text-center" style={cardPrice}>$49<span class="period" style={period}>/month</span></h6>
          <hr></hr>
          <ThirdList />
          <PriceButton />
        </Card.Body>
      </Card>
    </Col>
  );
}

/* it is used to render the whole pricing card */
function PricingCard() {

  const sectionStyle = {
    background: "DodgerBlue",
  };


  return (
    <div>
      <section class="pricing py-5" style={sectionStyle}>
        <Container >
          <Row>
            <FirstCard />
            <SecondCard />
            <ThirdCard />
          </Row>
        </Container >
      </section>
    </div>
  );
}

/* it is used to render the whole app */
function App() {
  return (
    <div>
      <div>
        <h1 style={{ textAlign: 'center', color: 'chocolate', padding: 15 }}>PRICING CARD</h1>
        <PricingCard />
      </div>
    </div>
  )
}

export default App