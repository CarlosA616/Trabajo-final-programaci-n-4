// src/componentes/playerDetails.jsx
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './playerDetails.css';

const PlayerDetails = ({ player }) => {
    return (
        <div className="player-details">
            {player ? (
                <TransitionGroup>
                    <CSSTransition
                        key={player.name}
                        timeout={500}
                        classNames="player-details"
                    >
                        <div>
                            <CSSTransition
                                key={player.name + 'name'}
                                timeout={500}
                                classNames="player-details"
                            >
                                <h2>{player.name}</h2>
                            </CSSTransition>
                            <CSSTransition
                                key={player.number}
                                timeout={500}
                                classNames="player-details"
                            >
                                <p><strong>Number:</strong> {player.number}</p>
                            </CSSTransition>
                            <CSSTransition
                                key={player.team}
                                timeout={500}
                                classNames="player-details"
                            >
                                <p><strong>Team:</strong> {player.team}</p>
                            </CSSTransition>
                            <CSSTransition
                                key={player.position}
                                timeout={500}
                                classNames="player-details"
                            >
                                <p><strong>Position:</strong> {player.position}</p>
                            </CSSTransition>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            ) : (
                <div>Select a player to see details</div>
            )}
        </div>
    );
};

export default PlayerDetails;
