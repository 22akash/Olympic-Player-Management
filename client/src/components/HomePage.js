// src/components/Home.js

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Home.css'; 
// import logo from '../images/logo.png';

const HomePage = () => {
  return (
    <div className="home-page">
      <Container fluid className="p-4">
        <h1 className="text-center mb-4">Paris Olympics 2024</h1>

        {/* Hero Section */}
        {/* <div className="mb-5">
          <img
            src={logo}  // Use the correct path relative to the public folder
            alt="Paris Olympics 2024"
            className="img-fluid w-100"
            style={{ height: 'auto', maxHeight: '450px', objectFit: 'cover' }}
          />
        </div> */}

        {/* Info Cards */}
        <Row className="gy-4">
          <Col lg={4} md={6} sm={12}>
            <Card className="shadow-sm">
              {/* <Card.Img variant="top" src="https://example.com/sports.jpg" alt="Sports" /> */}
              <Card.Body>
                <Card.Title className="text-center">Olympic Sports</Card.Title>
                <Card.Text>
                  Discover the various sports that will be contested during the Paris 2024 Olympic Games.
                </Card.Text>
                <div className="text-center">
                <Button variant="dark" href="https://olympics.com/en/sports/" target="_blank">
                  Learn More
                </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card className="shadow-sm">
              {/* <Card.Img variant="top" src="https://example.com/schedule.jpg" alt="Schedule" /> */}
              <Card.Body>
                <Card.Title className="text-center">Event Schedule</Card.Title>
                <Card.Text>
                  Stay updated with the full schedule of events happening at Paris Olympics 2024.
                </Card.Text>
                <div className="text-center">
                <Button variant="dark" href="https://olympics.com/en/schedule/" target="_blank">
                  View Schedule
                </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card className="shadow-sm">
              {/* <Card.Img variant="top" src="https://example.com/tickets.jpg" alt="Tickets" /> */}
              <Card.Body>
                <Card.Title className="text-center">Buy Tickets</Card.Title>
                <Card.Text>
                  Don't miss out! Get your tickets for the most exciting sporting event of 2024.
                </Card.Text>
                <div className="text-center">
                <Button variant="dark" href="https://tickets.paris2024.org/" target="_blank">
                  Purchase Tickets
                </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* About Paris Section */}
        <div className="my-5">
          <h2 className="text-center">About Paris 2024</h2>
          <p className="text-center">
            The Paris 2024 Olympic Games will be held from July 26 to August 11, 2024. This will mark the third time the Summer Olympics are held in Paris, after 1900 and 1924. The games will feature over 10,000 athletes from around the globe competing in 32 sports and 329 events. Paris is set to showcase not only its world-class venues but also its rich cultural heritage to the global audience.
          </p>
        </div>

        {/* Venue Section */}
        <Row className="gy-4">
          <Col lg={6} md={12}>
            <Card className="shadow-sm">
              {/* <Card.Img variant="top" src="https://example.com/paris-venue.jpg" alt="Paris Venue" /> */}
              <Card.Body>
                <Card.Title className="text-center">Olympic Venues</Card.Title>
                <Card.Text>
                  Explore the state-of-the-art venues that will host the games, including Stade de France and the iconic Eiffel Tower area.
                </Card.Text>
                <div className="text-center">
                <Button variant="dark" href="https://olympics.com/en/olympic-games/paris-2024/venue" target="_blank">
                  Venue Details
                </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} md={12}>
            <Card className="shadow-sm">
              {/* <Card.Img variant="top" src="https://example.com/paris-culture.jpg" alt="Paris Culture" /> */}
              <Card.Body>
                <Card.Title className="text-center">Paris and Culture</Card.Title>
                <Card.Text>
                  Discover how the Paris 2024 Olympics will celebrate the vibrant culture, arts, and history of the City of Light.
                </Card.Text>
                <div className="text-center">
                <Button variant="dark" href="https://olympics.com/en/olympic-games/paris-2024/culture" target="_blank">
                  Discover Culture
                </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default HomePage;
