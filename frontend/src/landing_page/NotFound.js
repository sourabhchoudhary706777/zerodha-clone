import React from 'react';

function NotFound() {
    return ( 
        <div className='container p-5 mt-5'>
            <div className='row text-center'>
            <h1 className='mt-5 fs-3 p-3'style={{color:'#424242'}}>404 Page Not Found</h1>
            <p className='mb-5'>Sorry, the page you are looking for could not be found.</p>
            </div>
        </div>
     );
}

export default NotFound;