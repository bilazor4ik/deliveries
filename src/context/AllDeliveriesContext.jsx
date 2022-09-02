import { createContext, useEffect, useState  } from "react";
import { collection, deleteDoc, doc, getDoc, onSnapshot, orderBy, query, updateDoc } from "firebase/firestore";
import { db } from '../firebase';
export const AllDeliveriesContext = createContext()

export const AllDeliveriesContextProvider = ({children}) =>{
    const [allDeliveries, setAllDeliveries] = useState([])
    

    const getDeliveries = async () => {
        const q = query(collection(db, 'deliveries'), orderBy("eta", "asc"))
        onSnapshot(q, (querySnapshot) => {
            setAllDeliveries(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }

    useEffect(() => {
        getDeliveries()
       
    }, [])

    const updateStatus = async (id) => {
        const deliveryRef = doc(db, 'deliveries', id)
        const deliveryData = await getDoc(deliveryRef)
        const deliveryStatus = deliveryData.data().status
        setTimeout(()=>{

        },1000)
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