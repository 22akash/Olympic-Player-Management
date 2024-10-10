// // src/components/UpdatePlayer.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const UpdatePlayer = () => {
//   const { id } = useParams();
//   const [formData, setFormData] = useState({
//     name: '',
//     country: '',
//     gender: '',
//     sport: ''
//   });

//   useEffect(() => {
//     axios.get(`http://localhost:5000/api/players`)
//       .then(response => {
//         const player = response.data.find(p => p.id === parseInt(id));
//         if (player) {
//           setFormData({
//             name: player.name,
//             country: player.country,
//             gender: player.gender,
//             sport: player.sport
//           });
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching player:', error);
//       });
//   }, [id]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.put(`http://localhost:5000/api/players/${id}`, formData)
//       .then(() => {
//         alert('Player updated successfully!');
//       })
//       .catch(error => {
//         console.error('Error updating player:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Update Player</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Name:</label><br />
//         <input type="text" name="name" value={formData.name} onChange={handleChange} /><br />

//         <label>Country:</label><br />
//         <input type="text" name="country" value={formData.country} onChange={handleChange} /><br />

//         <label>Gender:</label><br />
//         <input type="text" name="gender" value={formData.gender} onChange={handleChange} /><br />

//         <label>Sport:</label><br />
//         <input type="text" name="sport" value={formData.sport} onChange={handleChange} /><br /><br />

//         <button type="submit">Update Player</button>
//       </form>
//     </div>
//   );
// };

// export default UpdatePlayer;

// src/components/UpdatePlayer.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate

import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap'; // Import Bootstrap components

const UpdatePlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Create navigate instance for redirecting

  const [formData, setFormData] = useState({
    name: '',
    country: '',
    gender: '',
    sport: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/players`)
      .then(response => {
        const player = response.data.find(p => p.id === parseInt(id));
        if (player) {
          setFormData({
            name: player.name,
            country: player.country,
            gender: player.gender,
            sport: player.sport
          });
        }
      })
      .catch(() => {
        setIsError(true);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/players/${id}`, formData)
      .then(() => {
        setIsSuccess(true);
        setIsError(false);
        // After 2 seconds, redirect to /players
        setTimeout(() => {
          navigate('/players');
        }, 2000);
      })
      .catch(() => {
        setIsError(true);
        setIsSuccess(false);
      });
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Update Player</h2>

      {isSuccess && <Alert variant="success">Player updated successfully! Redirecting...</Alert>}
      {isError && <Alert variant="danger">Error updating player. Please try again later.</Alert>}

      <Form onSubmit={handleSubmit} className="p-4 border rounded bg-light shadow-sm">
        <Row>
          <Col md={6} sm={12}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter player's name"
                required
              />
            </Form.Group>
          </Col>

          <Col md={6} sm={12}>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter player's country"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6} sm={12}>
            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6} sm={12}>
            <Form.Group className="mb-3">
              <Form.Label>Sport</Form.Label>
              <Form.Control
                type="text"
                name="sport"
                value={formData.sport}
                onChange={handleChange}
                placeholder="Enter player's sport"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="success" type="submit" className="w-100">
          Update Player
        </Button>
      </Form>
    </Container>
  );
};

export default UpdatePlayer;
