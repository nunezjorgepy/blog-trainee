import './ShareSocial.css'
import { Link } from 'react-router'

/* 
TODO:
    - Los links de compartir
*/

function ShareSocial() {
    return (
        <section className="section_article_social_media">
            <div className="article_social_width bottom_border_small">
                <span className="article_social_span">
                    Comparte el artículo con:
                </span>
                <div className="article_social_media">
                    <Link to={'/'}>
                        <i className="bi bi-whatsapp icon_primary_color article_social_fz"></i>
                    </Link>
                    <Link to={'/'}>
                        <i className="bi bi-instagram icon_primary_color article_social_fz"></i>
                    </Link>
                    <Link to={'/'}>
                        <i className="bi bi-threads icon_primary_color article_social_fz"></i>
                    </Link>
                    <Link to={'/'}>
                        <i className="bi bi-facebook icon_primary_color article_social_fz"></i>
                    </Link>
                    <Link to={'/'}>
                        <i className="bi bi-twitter-x icon_primary_color article_social_fz"></i>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ShareSocial