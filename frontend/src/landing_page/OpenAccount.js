import React from 'react';
import { Link } from "react-router-dom";

function OpenAccount() {
    return ( 
        <div className='container p-5 mt-5'>
            <div className='row text-center'>
            <h1 className='mt-5 fs-3 p-3'style={{color:'#424242'}}>Open a Zerodha account</h1>
            <p className='mb-5'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <Link 
            to="/signup"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className='mb-5 p-2 btn btn-primary fs-5'
            style={{width: "20%", margin: "0 auto", backgroundColor:'#387ed1'}}
            >
            Sign up for free
            </Link>
            </div>
        </div>
     );
}

export default OpenAccount;