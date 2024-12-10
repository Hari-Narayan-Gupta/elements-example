import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/WeblinksExample.css';

const WeblinksExample = () => {
    return (
        <div className="weblinks-example-container">
            <h1>Web Links Example</h1>
            <p>Explore various web links below:</p>
            <ul>
                <li>
                    <Link to="/example/forgotPasswords" className="web-link">
                        Forgotten password?
                    </Link>
                </li>
                {/* Add more links if needed */}
            </ul>
        </div>
    );
};

export default WeblinksExample;
