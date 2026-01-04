// Momentaneamente para ver si el useNavigate funciona correctamente.
import './UserPage.css'
import HeaderComponent from "../../Components/Header/HEaderComponent"
import UserInfo from "../../Components/UserInfo/UserInfo"
import { useParams } from 'react-router'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../Context/userContext'

function UserPage() {
    const { user } = useParams()
    const { getOneUser } = useContext(UserContext)
    const [userSelected, setUserSelected] = useState({})
    const [isLoadingUser, setIsLoadingUser] = useState(true)
    
    function loadUser(username) {
        setIsLoadingUser(true)
        setTimeout(
            async function() {
                // Busco el usuario
                const foundUser = await getOneUser(username)
                // Guardo al usuario
                setUserSelected(foundUser)

                setIsLoadingUser(false)
            }, 
            1000
        )
    }

    useEffect(
        () => {
            loadUser(user)
        }, []
    )

    return (
        <div className="whole_page_flex">
            <HeaderComponent />
            <main className="user_main">
                <section className="user_page_section">
                    {/* Section width */}
                    <div className="section_max_width">
                        {/* Display: flex */}
                        <div className="user_info_flex">
                            <UserInfo userSelected={userSelected} isLoadingUser={isLoadingUser} />
                            <div className="user_info_articles">
                                Artículo
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default UserPage