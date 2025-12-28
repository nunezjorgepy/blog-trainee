import { createContext, useState } from "react";

export const UserContext = createContext()

const UserContextProvider = (props) => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('')


    const providerValues = {
        name,
        setName,
        lastName,
        setLastName,
        username,
        setUsername,
        password,
        setPassword,
        email,
        setEmail,
        phone,
        setPhone,
        country,
        setCountry
    }
    
    return (
        <UserContext.Provider value={providerValues}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContextProvider }