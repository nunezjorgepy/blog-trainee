import './ArticlePage.css'
import { Link } from "react-router"
import HeaderComponent from "../../Components/Header/HEaderComponent"
import Article from '../../Components/Article/Article'
import ShareSocial from '../../Components/ShareSocial/ShareSocial'
import Comment from '../../Components/Comment/Comment'

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
                <ShareSocial />

                {/* Comentarios / Respuestas */}
                <section className="comment_section">
                    <h3 className="comment_title h3_title">
                        <span>Comentarios</span>
                    </h3>
                    <div className="comment_width">
                        {/* Grupo de comentarios y respuestas */}
                        <div className="comment_group">
                            {/* Comentario */}
                            <Comment />
                            {/* Respuesta */}
                            <Comment isAnswer />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default ArticlePage