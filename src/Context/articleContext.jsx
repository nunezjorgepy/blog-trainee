import { createContext, useState } from "react";

export const ArticleContext = createContext()

const ArticleContextProvider = (props) => {
    const [titulo, setTitulo] = useState('')
    const [paragraphs, setParagraphs] = useState([])
    const [tags, setTags] = useState([])
    

    const providerValues = {
        titulo,
        setTitulo,
        paragraphs,
        setParagraphs,
        tags,
        setTags
    }

    return (
        <ArticleContext.Provider value={providerValues}>
            {props.children}
        </ArticleContext.Provider>
    )
}

export { ArticleContextProvider }