import { createContext, useState } from "react";

export const NotificationContext = createContext()

export const NotificationContextProvider = ({children}) =>{
    const [notificationCount, setNotificationCount] = useState(0)
    const [showNotification, setShowNotification] = useState(false)
    return(
        <NotificationContext.Provider value={{notificationCount, setNotificationCount, showNotification, setShowNotification}}>
            {children}
        </NotificationContext.Provider>
    )

}