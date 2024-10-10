// // src/components/CreatePlayer.js

// import React, { useState } from 'react';
// import axios from 'axios';

// const CreatePlayer = () => {
//   const [formData, setFormData] = useState({
//     id:0,
//     name: '',
//     country: '',
//     gender: '',
//     sport: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:5000/api/players', formData)
//       .then(() => {
//         alert('Player created successfully!');
//         setFormData({
//           id:0,
//           name: '',
//           country: '',
//           gender: '',
//           sport: ''
//         });
//       })
//       .catch(error => {
//         console.error('Error creating player:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Create Player</h2>
//       <form onSubmit={handleSubmit}>
//       <label>Id:</label><br />
//         <input type="number" name="id" value={formData.id} onChange={handleChange} /><br />

//         <label>Name:</label><br />
//         <input type="text" name="name" value={formData.name} onChange={handleChange} /><br />

//         <label>Country:</label><br />
//         <input type="text" name="country" value={formData.country} onChange={handleChange} /><br />

//         <label>Gender:</label><br />
//         <input type="text" name="gender" value={formData.gender} onChange={handleChange} /><br />

//         <label>Sport:</label><br />
//         <input type="text" name="sport" value={formData.sport} onChange={handleChange} /><br /><br />

//         <button type="submit">Create Player</button>
//       </form>
//     </div>
//   );
// };

// export default CreatePlayer;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './CreatePlayer.css'; // Import the CSS file for styles

const CreatePlayer = () => {
  const [formData, setFormData] = useState({
    id: 0,
    name: '',
    country: '',
    gender: '',
    sport: ''
  });

  const navigate = useNavigate(); // For redirecting to /players after successful creation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/players', formData)
      .then(() => {
        alert('Player created successfully!');
        setFormData({
          id: 0,
          name: '',
          country: '',
          gender: '',
          sport: ''
        });
        navigate('/players'); // Redirect to players list after creation
      })
      .catch(error => {
        console.error('Error creating player:', error);
      });
  };

  return (
    <div className="background">
      <Container>
        <Row>
          <Col>
            <h2>Create Player</h2>
            <Form onSubmit={handleSubmit} className="form-container">
              <Form.Group className="mb-3">
                <Form.Label>Id</Form.Label>
                <Form.Control
                  type="number"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  type="text"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Sport</Form.Label>
                <Form.Control
                  type="text"
                  name="sport"
                  value={formData.sport}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <div className="button-container">
                <Button variant="success" type="submit">
                  Create Player
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreatePlayer;
