
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// const DeletePlayer = () => {
//   const { id } = useParams();  // Get the player ID from the URL
//   const navigate = useNavigate(); // For navigation after deletion
//   const [player, setPlayer] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch player details to display before deletion
//   useEffect(() => {
//     const fetchPlayer = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/players/${id}`);
//         setPlayer(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError('Error fetching player data.');
//         setLoading(false);
//       }
//     };

//     fetchPlayer();
//   }, [id]);

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`http://localhost:5000/api/players/${id}`);
//       // After deleting, navigate to the players list
//       navigate('/players');
//     } catch (error) {
//       setError('Error deleting player.');
//     }
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div>
//       <h1>Delete Player</h1>
//       {player ? (
//         <div>
//           <p>Are you sure you want to delete the following player?</p>
//           <p><strong>Country:</strong> {player.country}</p>
//           <p><strong>Gender:</strong> {player.gender}</p>
//           <p><strong>Sport:</strong> {player.sport}</p>

//           <button onClick={handleDelete}>Yes, Delete</button>
//           <button onClick={() => navigate('/players')}>Cancel</button>
//         </div>
//       ) : (
//         <p>No player found</p>
//       )}
//     </div>
//   );
// };

// export default DeletePlayer;

// src/components/DeletePlayer.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button, Alert, Spinner } from 'react-bootstrap'; // Import Bootstrap components

const DeletePlayer = () => {
  const { id } = useParams();  // Get the player ID from the URL
  const navigate = useNavigate(); // For navigation after deletion
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Fetch player details to display before deletion
  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/players/${id}`);
        setPlayer(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching player data.');
        setLoading(false);
      }
    };

    fetchPlayer();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/players/${id}`);
      setIsSuccess(true);
      setError(null);
      // After 2 seconds, navigate to /players
      setTimeout(() => {
        navigate('/players');
      }, 2000);
    } catch (error) {
      setError('Error deleting player.');
      setIsSuccess(false);
    }
  };

  if (loading) {
    return (
      <Container className="mt-4 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p>Loading...</p>
      </Container>
    );
  }

  if (error) {
    return <Container className="mt-4"><Alert variant="danger">{error}</Alert></Container>;
  }

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Delete Player</h2>

      {isSuccess && <Alert variant="success">Player deleted successfully! Redirecting...</Alert>}
      {error && <Alert variant="danger">Error deleting player. Please try again later.</Alert>}

      {player && (
        <div className="text-center">
          <p>Are you sure you want to delete the following player?</p>
          <p><strong>Country:</strong> {player.country}</p>
          <p><strong>Gender:</strong> {player.gender}</p>
          <p><strong>Sport:</strong> {player.sport}</p>

          <div className="d-flex justify-content-center mt-4">
            <Button variant="danger" onClick={handleDelete} className="me-2">
              Yes, Delete
            </Button>
            <Button variant="secondary" onClick={() => navigate('/players')}>
              Cancel
            </Button>
          </div>
        </div>
      )}

      {!player && !isSuccess && (
        <Alert variant="warning" className="text-center">No player found</Alert>
      )}
    </Container>
  );
};

export default DeletePlayer;
