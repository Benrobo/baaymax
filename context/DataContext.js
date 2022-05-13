import { createContext, useState } from "react";


const DataContext = createContext(null)

export default DataContext

export function DataContextProvider({ children }) {


    const [contactActive, setContactActive] = useState(false)

    function openContactForm() {
        setContactActive(true)
    }

    function closeContactForm() {
        setContactActive(false)
    }

    return (
        <DataContext.Provider value={{ contactActive, openContactForm, closeContactForm }}>
            {children}
        </DataContext.Provider>
    )
}