import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div className='container mt-5 p-5'>
            <div className='row'>
                <h3 style={{fontSize: '60px', fontWeight: '400' }}>404 Not Found</h3>
                <p>Sorry, the page you are looking for does not exist.</p>
                <Link to="/" className='btn btn-outline-danger rounded-md p-2 fs-5 rounded-5 mt-4' style={{width: '20%'}}>Go to Home Page</Link>
            </div>
        </div>
    );
}

export default NotFoundPage;