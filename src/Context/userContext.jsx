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

    /* Verificaciones */
    const [usernameExists, setUsernameExists] = useState(false)
    const [emailExists, setEmailExists] = useState(false)
    const [phoneExists, setPhoneExists] = useState(false)


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
        setCountry,
        usernameExists,
        setUsernameExists,
        emailExists,
        setEmailExists,
        phoneExists,
        setPhoneExists,
    }
    
    return (
        <UserContext.Provider value={providerValues}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContextProvider }