import { createContext, useState } from "react";

export const NotificationContext = createContext()

export const NotificationContextProvider = ({children}) =>{
    const [notificationCount, setNotificationCount] = useState(0)
    return(
        <NotificationContext.Provider value={{notificationCount, setNotificationCount}}>
            {children}
        </NotificationContext.Provider>
    )

}