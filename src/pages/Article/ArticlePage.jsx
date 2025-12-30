import { Link } from "react-router"
import HeaderComponent from "../../Components/Header/HEaderComponent"


function ArticlePage() {
    return (
        <div className="whole_page_flex">
            <HeaderComponent />
            <main>
                <Link to={'/'}>Home Page</Link>
            </main>
        </div>
    )
}

export default ArticlePage