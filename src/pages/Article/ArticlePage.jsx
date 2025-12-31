import './ArticlePage.css'
import { Link } from "react-router"
import HeaderComponent from "../../Components/Header/HEaderComponent"
import Article from '../../Components/Article/Article'
import ShareSocial from '../../Components/ShareSocial/ShareSocial'

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
                            <div className="comment_container">
                                {/* Información del comentario */}
                                <div className="comment_info">
                                    <Link to={'/user/jorgenunez'} className="comment_by">
                                        jorgenunez
                                    </Link>
                                    <div className="comment_date">
                                        28/11/2025 22:15
                                    </div>
                                </div>
                                {/* Comentario */}
                                <div className="comment_text">
                                    <p className="comment_paragraph">
                                        Este es el comentario que hago sobre un artículo
                                    </p>
                                </div>
                            </div>
                            {/* Respuesta */}
                            <div className="comment_container answer">
                                <div className="comment_info">
                                    <Link to={'/user/tamaranunez'} className="comment_by">
                                        tamaranunez
                                    </Link>
                                    <div className="comment_date">
                                        28/11/2025 22:20
                                    </div>
                                </div>

                                <div className="comment_text">
                                    <p className="comment_paragraph">
                                        Y esta es la primer respuesta al comentaario
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default ArticlePage