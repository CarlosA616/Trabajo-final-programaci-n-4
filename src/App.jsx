// src/App.jsx
import React, { useState } from 'react';
import Header from './componentes/header';
import Roster from './componentes/roster';
import PlayerDetails from './componentes/playerDetails';
/* import SocialMedia from './componentes/socialMedia';
 */import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const players = [
  { number: 3, name: 'Kevin Harrell', team: 'Top Club', position: 'Guard' },
  { number: 2, name: 'usain bolón', team: 'Top Club', position: 'Guard' },
  { number: 4, name: 'James Fletcher', team: 'Top Club', position: 'Center' },
  { number: 5, name: 'sandra Fletcher', team: 'Top Club', position: 'Center' },
  { number: 6, name: 'pepito Fletcher', team: 'Top Club', position: 'Center' },
  { number: 7, name: 'Juan Fletcher', team: 'Top Club', position: 'Center' },
  { number: 10, name: 'James Fletcher', team: 'Top Club', position: 'Center' },
  { number: 14, name: 'Jeff Montes', team: 'Top Club', position: 'Forward-Guard' },
  { number: 15, name: 'pedro Montes', team: 'Top Club', position: 'Forward-Guard' },
  { number: 16, name: 'Jose Montes', team: 'Top Club', position: 'Forward-Guard' },
  { number: 20, name: 'Bryan Warner', team: 'Top Club', position: 'Forward-Center' },
];

function App() {
  const [filter, setFilter] = useState('');
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleRowClick = (player) => {
    setSelectedPlayer(player);
  };

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <Header />
      <div className="roster-container">
        <Roster
          players={filteredPlayers}
          filter={filter}
          onFilterChange={handleFilterChange}
          onRowClick={handleRowClick}
          className="roster"
          
        />
        <PlayerDetails player={selectedPlayer} className="player-details" />
      </div>
    </div>
  );
}

export default App;
