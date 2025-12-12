import React from 'react';
import { Link } from "react-router-dom";

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
            <img src = 'media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
            <h1 className='mt-4 fs-3' style={{color:'#424242'}}>Invest in everything</h1>
            <p className='fs-5 mb-5 mt-1'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <Link 
            to="/signup"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className='mb-5 p-2 btn btn-primary fs-5'
            style={{width: "20%", margin: "0 auto", backgroundColor:'#387ed1'}}
            >
            Signup Now
            </Link>
            </div>
        </div>
     );
}

export default Hero;