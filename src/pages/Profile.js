import React, {useContext, useEffect} from 'react';
import {GithubContext} from '../context/github/githubContext';
import {Link} from 'react-router-dom';

export const Profile = ({match}) => {
    const {getUser, getRepos, loading, user, repos} = useContext(GithubContext);
    const name = match.params.name;

    // после отрисовки
    // эффект и список зависимостей, пустой массив - выполнится один раз
    useEffect(() => {
        getUser(name);
        getRepos(name);        
    }, []);

    if (loading) {
        return <p className="text-center">Загрузка...</p>
    }

    console.log(match)
    return (
        <div>
            <h1>Profile page</h1>
            <Link to="/" className="btn btn-link">На главную</Link>
        </div>
    )
}
