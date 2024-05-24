import React from 'react';
import './playerRow.css';

const PlayerRow = ({ player, onClick, style }) => {
    return (
        <tr onClick={onClick} style={style}>
            <td>{player.number}</td>
            <td>{player.name}</td>
            <td>{player.team}</td>
            <td>{player.position}</td>
        </tr>
    );
};

export default PlayerRow;
