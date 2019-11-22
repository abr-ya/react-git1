import React from 'react';
import {Search} from '../components/Search/Search';
import {Card} from '../components/Card/Card';


export const Home = () => {
    const cards = new Array(15)
        .fill('')
        .map((item, index) => index)
    return (
        <div>
            <h1>Home page</h1>

            <Search />

            <div className="row">
                {cards.map(card => {
                    return (
                        <div className="col-sm-4 mb-4" key={card}>
                            <Card title={card} />
                        </div>                    
                    ) 
                })}
            </div>
        </div>
    )
}
