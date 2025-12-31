import './ArticlePage.css'
import { Link } from "react-router"
import HeaderComponent from "../../Components/Header/HEaderComponent"
import Article from '../../Components/Article/Article'

/* 
TODO:
    - Cambiar los links (Link) para que me lleve a la página correcta.
*/


function ArticlePage() {
    document.title = 'Artículo Publicado'
    return (
        <div className="whole_page_flex">
            <HeaderComponent />
            <main>
                {/* Artículo */}
                <Article />

                {/* Compartir en redes */}


                {/* Comentarios / Respuestas */}
            </main>
        </div>
    )
}

export default ArticlePage