
import AllDeliveries from '../components/AllDeliveries';
import cat from '../assets/cat-in-dark.gif'
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkMode';



export default function Home() {
    const {darkMode, setDarkMode} = useContext(DarkModeContext)
    return (
        <>
        {darkMode.status? <img src={cat} className="w-64 h-auto absolute" /> : null  }
        <div className=" w-1/2 mx-auto">
            
            

            {/* Display list of All Deliveries*/}
            <AllDeliveries />


           
        </div>
    
        </>)
}
