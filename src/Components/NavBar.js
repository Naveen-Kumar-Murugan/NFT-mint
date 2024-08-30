import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MetaMask from './MetaMask';


export default function NavBar() {
     return(
        <div className="navbar">
          <ul className="nav-items">
               <Link to="/" style={{textDecoration: 'none',color :'inherit'}}><li className="left-float"><h1>Tokens</h1></li></Link>
               <div className='float-right'>
               <Link to="/Mint" style={{textDecoration: 'none',color :'inherit'}}><li  className="mint-link">Mint</li></Link>
               <li className="wallet-address"><MetaMask/></li>
               </div>
          </ul>
        </div>
     )
}