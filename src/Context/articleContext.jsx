import { createContext } from "react";

export const ArticleContext = createContext()

const ArticleContextProvider = (props) => {
    

    const providerValues = {

    }

    return (
        <ArticleContext.Provider value={providerValues}>
            {props.children}
        </ArticleContext.Provider>
    )
}

export { ArticleContextProvider }