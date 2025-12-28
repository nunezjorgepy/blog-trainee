import { Link } from "react-router"
import HeaderComponent from "../Components/Header/HeaderComponent"


function HomePage() {
    return (
        <div>
            <HeaderComponent />
            <Link to={'/user'}>User Page</Link>
        </div>
    )
}

export default HomePage