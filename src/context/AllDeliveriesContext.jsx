import { createContext, useContext, useEffect, useState  } from "react";
import { collection, deleteDoc, doc, getDoc, onSnapshot, orderBy, query, updateDoc } from "firebase/firestore";
import { db } from '../firebase';
import { checkIfDeliveryDateToday } from "../utils/checkIfDeliveryDateToday";
import { NotificationContext } from "./NotificationContext";
export const AllDeliveriesContext = createContext()

export const AllDeliveriesContextProvider = ({children}) =>{
    const [allDeliveries, setAllDeliveries] = useState([])
    const {notificationCount, setNotificationCount} = useContext(NotificationContext)

    const getDeliveries = async () => {
        const q = query(collection(db, 'deliveries'), orderBy("eta", "asc"))
        onSnapshot(q, (querySnapshot) => {
            setAllDeliveries(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }

    
    const howManyToday =()=>{
        setNotificationCount(0)
        allDeliveries.map((delivery)=>{
            const { eta, status } =  delivery.data;
            
            if (checkIfDeliveryDateToday(eta) && !status) {
                    
                setNotificationCount((prev)=>prev+1)
           
           
          }
          return

        })
    }
    useEffect(() => {
        getDeliveries()
        howManyToday()
       console.log(notificationCount)
    }, [])

    useEffect(() => {
    
        howManyToday()
       console.log(notificationCount)
    }, [allDeliveries])
    


    const updateStatus = async (id) => {
        const deliveryRef = doc(db, 'deliveries', id)
        const deliveryData = await getDoc(deliveryRef)
        const deliveryStatus = deliveryData.data().status
       
        try {
            await updateDoc(deliveryRef, {

                status: !deliveryStatus
            })

        } catch (err) {
            alert(err)
        }
    }



    const handleDelete = async (id) => {
        const deliveryRef = doc(db, 'deliveries', id)
      
        try {
            await deleteDoc(deliveryRef)
        } catch (err) {
            alert(err)
        }
        
    }

    return(
        <AllDeliveriesContext.Provider value={{
            allDeliveries, 
            setAllDeliveries,
            updateStatus,
            handleDelete

        }}>
            {children}
        </AllDeliveriesContext.Provider>
    )
}