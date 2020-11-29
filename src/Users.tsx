import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api = (page:number = 1) => `https://randomuser.me/api/?seed=abc&page=${page}`;

interface IName {
    title: string,
    first: string,
    last: string
}

interface IUser {
    name: IName;
}

const loadUser = async (page:number): Promise<IUser[]> =>
    axios.get(api(page))
        .then(({ data }) => data.results)
        .catch(error => console.log(error));

const User = (user: IUser) => <div>{user.name.title} {user.name.first} {user.name.last}</div>

function Users() {
    const [page, setPage] = useState<number>(1);
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        loadUser(page).then((results: IUser[]) => setUsers([...users, ...results]));
    }, [page]);

    return (
        <>
            <button onClick={() => setPage(page + 1)}>Load User</button>
            {users.map((user: IUser, idx: number) => <User key={idx} {...user} />)}
        </>
    );
}

export default Users;