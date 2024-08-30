import NavBar from '../Components/NavBar';
import '../App.css';

export function Mint(){
    return(
        <div>
            <NavBar />
            <div className='imageURI-input'>
            <h2>Enter the ImageURI of the NFT</h2>
            <input type="text" /> 
            </div>
        </div>
    )
}