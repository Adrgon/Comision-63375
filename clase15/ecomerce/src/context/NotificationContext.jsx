import { useState, createContext } from "react";

export const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')


    const setNotification = (sev, msg) => {
        setMessage(msg)
        setSeverity(sev);
        setTimeout(()=>{
            setMessage('')
        }, 3000)
    }

    return (
        <NotificationContext.Provider value={{setNotification}}>
            <Notificacion message={message} severity={severity} />
            {children}
        </NotificationContext.Provider>
    )
}

const Notificacion = ({message, severity})=>{

    const background = {
        success: 'green',
        danger: 'red',
        warning: 'orange',
        default: 'blue'
    }

    const notificationStyle = {
        position: 'absolute',
        zIndex: 100, 
        top: 100,
        right: 30,
        padding: '20px',
        backgroundColor: background[severity] || background.default
    }

    if(message === '') return 

    return (
        <div style={notificationStyle}>
            {message}
        </div>
    )

}

/* export const useNotification = () => {
    return useContext(NotificationContext)
} */
