import { Link } from "react-router"
import HeaderComponent from "../../Components/Header/HEaderComponent"


function HomePage() {
    return (
        <div>
            <HeaderComponent />
            <Link to={'/user'}>User Page</Link>
            <Link to={'/config'}>Configuración</Link>
        </div>
    )
}

export default HomePage