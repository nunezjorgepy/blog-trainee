import { useContext } from "react"
import { UserContext } from "../../Context/userContext"
import HeaderComponent from "../../Components/Header/HEaderComponent"
import { Link } from "react-router"


function ConfigPage() {
    const { isLoggedIn } = useContext(UserContext)

    if (!isLoggedIn) {
        return(
            <>
                <HeaderComponent />
                <div className="not_auth">
                    No tenes permisos para entrar en esta página
                </div>
                <Link to={'/'}>Home</Link>
            </>
        )
    }
    return (
        <div>
            <HeaderComponent />
            Tenes permisos para entrar en esta página
        </div>
    )
}

export default ConfigPage