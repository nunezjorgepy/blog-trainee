import { createContext } from "react";

export const CommentContext = createContext()

const CommentContextProvider = (props) => {


    const providerValues = {

    }

    return (
        <CommentContext.Provider>
            {props.children}
        </CommentContext.Provider>
    )
}

export { CommentContextProvider }