import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api = (page: number = 1) => `https://randomuser.me/api/?seed=abc&page=${page}`;

interface IName {
    title: string,
    first: string,
    last: string
}

interface ILogin {
    uuid: string
}
interface IUser {
    name: IName;
    login: ILogin;
}

const loadUser = async (page: number): Promise<IUser[]> =>
    axios.get(api(page))
        .then(({ data }) => data.results)
        .catch(error => console.log(error));

const User = (user: IUser) => <>{user.name.title} {user.name.first} {user.name.last}</>

function Users() {
    const [page, setPage] = useState<number>(1);
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        loadUser(page).then((results: IUser[]) => setUsers(users => [...users, ...results]));
    }, [page]);

    return (
        <>
            <button onClick={() => setPage(page + 1)}>Load User</button>
            <ul>{users.map((user: IUser) => <li><User key={user.login.uuid} {...user} /></li>)}</ul>
        </>
    );
}

export default Users;