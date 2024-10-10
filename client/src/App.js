import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import CreatePlayer from './components/CreatePlayer';
import UpdatePlayer from './components/UpdatePlayer';
import DeletePlayer from './components/DeletePlayer';
import PlayersTable from './components/PlayersTable';
import Navig from './components/Navig';


const App = () => {
  return (
    <div>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/players">Players</Link>
          </li>
          <li>
            <Link to="/create">Create Player</Link>
          </li>
        </ul>
      </nav> */}
      <Navig />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/players" element={<PlayersTable />} />
        <Route path="/create" element={<CreatePlayer />} />
        <Route path="/update/:id" element={<UpdatePlayer />} />
        <Route path="/delete/:id" element={<DeletePlayer />} />
      </Routes>
    </div>
  );
};

export default App;
