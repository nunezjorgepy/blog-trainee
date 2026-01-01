// Conecta a la base de datos para obtener, modificar y postear los artículos.

import axios from "axios"

export async function postNewAtricle(data) {
    /* Envía la información a la base de datos */
    try {
        const response = await axios.post(`http://localhost:3000/api/articles`, data)
        return response.data
    } catch (error) {
        console.log(error.message)
        throw error
    }
}