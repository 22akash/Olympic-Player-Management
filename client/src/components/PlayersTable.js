// // src/components/PlayersTable.js

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const PlayersTable = () => {
//   const [players, setPlayers] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/players')
//       .then(response => {
//         setPlayers(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching players:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Players List</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Country</th>
//             <th>Gender</th>
//             <th>Sport</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {players.map(player => (
//             <tr key={player.id}>
//               <td>{player.id}</td>
//               <td>{player.name}</td>
//               <td>{player.country}</td>
//               <td>{player.gender}</td>
//               <td>{player.sport}</td>
//               <td>
//                 <Link to={`/update/${player.id}`}>Update</Link> |{' '}
//                 <Link to={`/delete/${player.id}`}>Delete</Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PlayersTable;

// src/components/PlayersTable.js

// src/components/PlayersTable.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table, Container } from 'react-bootstrap'; // Import Bootstrap components

const PlayersTable = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/players')
      .then(response => {
        setPlayers(response.data);
      })
      .catch(error => {
        console.error('Error fetching players:', error);
      });
  }, []);

  return (
    <Container>
      <h1 className="text-center my-4">ALL PLAYERS</h1> {/* Centered heading */}
      <Table striped bordered hover responsive="md" className="table-fit">
        <thead>
          <tr className="text-center"> {/* Center align table header */}
            <th>ID</th>
            <th>Name</th>
            <th>Country</th>
            <th>Gender</th>
            <th>Sport</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map(player => (
            <tr key={player.id} className="text-center"> {/* Center align table rows */}
              <td>{player.id}</td>
              <td>{player.name}</td>
              <td>{player.country}</td>
              <td>{player.gender}</td>
              <td>{player.sport}</td>
              <td>
                <Link to={`/update/${player.id}`} className="btn btn-sm btn-warning me-2">Update</Link>
                <Link to={`/delete/${player.id}`} className="btn btn-sm btn-danger">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default PlayersTable;
