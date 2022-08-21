import React from 'react';
import { useSelector } from 'react-redux';
import Card from './UI/Card'

function Order({ game }) {

    const players = game.players;

    return (
        <Card height={'350px'}>
            <h2>Game details:</h2>
            {Object.entries(game).map(([key, val], i) => (
                key === 'players' && val.length > 0 ? players.map((player, index) => {

                    return <h2 key={index}>
                        {player.firstName}
                    </h2>
                }) : <h2 key={i}>{key.toUpperCase()}: {val}</h2>

            ))}
        </Card>
    )
}

export default Order