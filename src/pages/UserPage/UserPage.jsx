// Momentaneamente para ver si el useNavigate funciona correctamente.
import './UserPage.css'
import HeaderComponent from "../../Components/Header/HEaderComponent"
import UserInfo from "../../Components/UserInfo/UserInfo"

function UserPage() {
    return (
        <div className="whole_page_flex">
            <HeaderComponent />
            <main className="user_main">
                <section className="user_page_section">
                    {/* Section width */}
                    <div className="section_max_width">
                        {/* Display: flex */}
                        <div className="user_info_flex">
                            <UserInfo />
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