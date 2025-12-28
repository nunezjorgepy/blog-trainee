// Momentaneamente para ver si el useNavigate funciona correctamente.

import { Link } from "react-router"
import HeaderComponent from "../../Components/Header/HEaderComponent"

function UserPage() {
    return (
        <div>
            <HeaderComponent />
            <Link to={'/'}>Home Page</Link>
        </div>
    )
}

export default UserPage