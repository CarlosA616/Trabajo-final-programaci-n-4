import React, { useState, useEffect } from 'react';
import PlayerRow from './playerRow';
import './roster.css';

const Roster = ({ players, filter, onFilterChange, onRowClick }) => {
    const [filteredPlayers, setFilteredPlayers] = useState(players);

    useEffect(() => {
        setFilteredPlayers(players);
    }, [players]);

    const FilasImpares = () => {
        setFilteredPlayers(prevPlayers =>
            prevPlayers.map((player, index) => ({
                ...player,
                color: index % 2 === 0 ? 'lightgreen' : ''
            }))
        );
    };

    const FilasPares = () => {
        setFilteredPlayers(prevPlayers =>
            prevPlayers.map((player, index) => ({
                ...player,
                color: index % 2 !== 0 ? 'lightblue' : ''
            }))
        );
    };

    const filterPlayersRange = (start, end) => {
        setFilteredPlayers(
            players
                .filter(player => player.number >= start && player.number <= end)
                .map((player, index) => ({
                    ...player,
                    color: ''
                }))
        );
    };

    const resetFilters = () => {
        setFilteredPlayers(players.map(player => ({ ...player, color: '' })));
    };

    return (
        <div className="roster">
            <h1><b>Roster</b></h1>
            <br></br>
            <input
                type="text"
                placeholder="Buscar por nombre jugador..."
                value={filter}
                onChange={onFilterChange}
                className="filter-input"
            />
            <div className="button-group">
                <button onClick={FilasImpares}>Colorear Filas Impares</button>
                <button onClick={FilasPares}>Colorear Filas Pares</button>
                <button onClick={() => filterPlayersRange(1, 10)}>Filtrar Registros 1-10</button>
                <button onClick={() => filterPlayersRange(11, 20)}>Filtrar Registros 11-20</button>
                <button onClick={resetFilters}>Resetear Filtros</button>
            </div>
            
            <table className="roster-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Player</th>
                        <th>Team</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPlayers.map(player => (
                        <PlayerRow
                            key={player.number}
                            player={player}
                            onClick={() => onRowClick(player)}
                            style={{ backgroundColor: player.color }}
                        />
                    ))}
                </tbody>
            </table>
            
        </div>
    );
};

export default Roster;
