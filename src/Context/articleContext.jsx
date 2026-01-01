import axios from "axios";
import { createContext, useState } from "react";

export const ArticleContext = createContext()

const ArticleContextProvider = (props) => {
    const [titulo, setTitulo] = useState('')
    const [paragraphs, setParagraphs] = useState([])
    const [tags, setTags] = useState([])

    function verifyTitle(info) {
        const verifying = info.trim()
        if (!verifying) return false
        return true
    }

    function verifyArray(info) {
        if (info.length === 0) return false
        return true
    }

    async function postNewAtricle(data) {
        /* Envía la información a la base de datos */
        try {
            const response = await axios.post(`http://localhost:3000/api/articles`, data)
            console.log(response.data)
            return response.data
        } catch (error) {
            console.log(error.message)
            throw error
        }
    }
    

    const providerValues = {
        titulo,
        setTitulo,
        paragraphs,
        setParagraphs,
        tags,
        setTags,
        verifyTitle,
        verifyArray,
        postNewAtricle
    }

    return (
        <ArticleContext.Provider value={providerValues}>
            {props.children}
        </ArticleContext.Provider>
    )
}

export { ArticleContextProvider }