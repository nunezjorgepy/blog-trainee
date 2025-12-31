import './ArticlePage.css'
import HeaderComponent from "../../Components/Header/HEaderComponent"
import Article from '../../Components/Article/Article'
import ShareSocial from '../../Components/ShareSocial/ShareSocial'
import CommentSection from '../../Components/CommentSection/CommentSection'




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
                        <CommentSection />
                    </div>
                </section>
            </main>
        </div>
    )
}

export default ArticlePage