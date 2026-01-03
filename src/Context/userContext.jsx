import { createContext, useState } from "react";
import { getUserByUsername } from "../services/userService";

export const UserContext = createContext()

const UserContextProvider = (props) => {
    /* Estados para el nuevo contacto */
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
    // Este estado verifica si el usuario ingreso correctamente sus credenciales. En un app real, esto tiene que ser mucho más seguro, pero la parte de seguridad todavía no la vi bien, asique por ahora lo hago así.
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    async function getOneUser() {
        /* 
        Busco al usuario según el usuario ingresado
        */
        const response = await getUserByUsername(username)
        // Si no encuentra al usuario
        if (!response) {
            return false
        }
        return response.data[0]
    }

    async function checkPassword() {
        /* 
        Verifica si el password ingresado coincide con el de la base de datos
        */
        // Busco al contacto
        const findUser = await getUserByUsername(username)
        // Si no encuentar al usuario o si no coincide el password, no permite ingresar
        if (!findUser || password !== findUser.data[0].password) {
            return false
        }
        // Si todo es correcto, ingresa a la página
        return true
    }


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
        checkPassword,
        getOneUser,
        isLoggedIn,
        setIsLoggedIn
    }
    
    return (
        <UserContext.Provider value={providerValues}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContextProvider }