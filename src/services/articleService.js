// Conecta a la base de datos para obtener, modificar y postear los artículos.

import axios from "axios"

const URL = "http://localhost:3000/api/"

export async function getAllArticles() {
    // Obtiene todos los artículos
    try {
        const response = await axios.get(`${URL}articles`)
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export async function getNArticles(limit) {
    try {
        const response = await axios(`${URL}article/${limit}`)
        return response.data
    } catch (error) {
        console.log(error)
        return false
    }
}

export async function postNewAtricle(data) {
    /* Envía la información a la base de datos */
    try {
        const response = await axios.post(`${URL}articles`, data)
        return response.data
    } catch (error) {
        console.log(error.message)
        throw error
    }
}