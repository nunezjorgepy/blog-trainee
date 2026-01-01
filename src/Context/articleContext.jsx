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