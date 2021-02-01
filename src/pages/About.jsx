import React, { useState, useEffect } from "react";
import { Page } from '../components/Page';
import { useRoutes, A } from 'hookrouter';

const routes = {

}

export const About = () => {

    const match = useRoutes(routes);
    const [userArray, setUserArray] = useState([]);

    useEffect(() => {
        getUserData();
        
      }, []);
    
      const getUserData = async () => {
        await fetch('/api/users_data')
        .then(res => res.json())
        .then(data => {
          setUserArray(data.users)
        });
      }

    return (
        <Page title="About">
            <div style={{ marginBottom: '20px'}}>
                {userArray.map(row => (
                <div key={row.name}>
                    <p>Name: {row.name}</p>
                    <p style={{marginRight: '10px'}}>Birth Year: {row.birth_year}</p>
                    <span style={{ marginRight: '20px'}}>About {row.name} </span>
                </div>
            ))}
            </div>
            { match || <div>Choose an About Page</div>}
        </Page>
    )
}
