import { createContext, useState } from "react";
import { getOneArticle } from "../services/articleService";

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

    async function getArticle(id) {
        // Consigue el artículo con la id pasada
        const response = await getOneArticle(id)

        // Si no existe el artículo, devuelve false
        if (!response) return false

        // Si existe, devuelve el artículo
        return response
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
    }

    return (
        <ArticleContext.Provider value={providerValues}>
            {props.children}
        </ArticleContext.Provider>
    )
}

export { ArticleContextProvider }