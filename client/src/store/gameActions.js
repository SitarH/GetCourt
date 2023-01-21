import { apiAddress } from '../api';

export const AddGame = async (id, game) => {
   
    const gameDets = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(game)
    };
    try {
        const response = await fetch(`${apiAddress}/api/GetCourt/user/addGame/${id}`, gameDets);
        const data = await response.json();
        return data;
    } catch (e) {
        return e;
    }
}


