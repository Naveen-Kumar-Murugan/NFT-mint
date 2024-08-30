import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';
import { useSDK } from '@metamask/sdk-react';

export default function  MetaMask()  {
    const { ethereum } = window;
    const [walletAddress,setWalletAddress] = React.useState(" ")
    const connectMetaMask = async () => {
        try {
            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            console.log("accounts: ", accounts);
            setWalletAddress(accounts[0]);
        } catch (err) {
            console.error("error occured while connecting to MetaMask: ", err)
        }
    }
    return(
        <div>
            <button onClick={connectMetaMask} className="connect-btn">Connect Wallet</button>
            <p className="wallet-add">Wallet Address : {walletAddress}</p>
        </div>
    )
}
