import React from 'react';
import { useSelector } from 'react-redux';
import Card from './UI/Card'

function Order() {

    const order = useSelector(state => state.gameOrder);

    return (
        <Card height={'350px'}>
            <h2>Game details:</h2>
            {Object.entries(order).map(([key, val], i) => (
                <h2 key={i}>
                    {key.toUpperCase()}: {val}
                </h2>
            ))}
        </Card>
    )
}

export default Order