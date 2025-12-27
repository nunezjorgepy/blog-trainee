// Conecta con la base de datos para conseguir todo tipo de información de los usuarios.

import axios from "axios";

const URL = `http://localhost:3000/api/`


/* Funciones verificadoras */
export async function getUserByUsername(username) {
    // Verifica si existe un usuario con el nombre de usuario pasado como parámetro
    try {
        const foundUser = await axios.get(`${URL}username/${username}`)

        if (foundUser.data.length) {
            return foundUser
        }
        return false
    } catch (error) {
        console.log(error)
        return false
    }

}

export async function getUserByEmail(email) {
    // Verifica si existe un usuario con el email pasado

    try {
        const foundUser = await axios.get(`${URL}userMail/${email}`)
        
        if (foundUser.data.length) {
            return foundUser
        }
        return false
    } catch (error) {
        console.log(error)
        return false
    }
}

export async function getUserByPhone(phone) {
    // Verifica si ya existe un usuario con ese teléfono

    try {
        const foundUser = await axios.get(`${URL}userPhone/${phone}`)
        
        if (foundUser.data.length) {
            return foundUser
        }
        return false
    } catch (error) {
        console.log(error)
        return false        
    }
    
}

/* Post data */
export async function postNewUser(data) {
    // Nuevo usuario
    try {
        const newUser = await axios.post(`${URL}users/`, data)
        return newUser.data
    } catch (error) {
        console.log(error.message)
        throw error
    }
}

