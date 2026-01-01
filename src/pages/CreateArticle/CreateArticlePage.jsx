import './CreateArticlePage.css'
import HeaderComponent from "../../Components/Header/HEaderComponent"


function CreateArticlePage() {
    return (
        <>
            <HeaderComponent />
            <main className="creat_article_main">
                <section>
                    <div className="create_form_flex">
                        <h2 className="create_article_title title">
                            Crea un nuevo artículo
                        </h2>
                        <div className="create_article_container">
                            <form className="create_article_form">
                                {/* Título */}
                                <div className="create_article_titulo form_group">
                                    <label htmlFor="create_title" className="create_article_title_label required">
                                        Título
                                    </label>
                                    <input 
                                        type="text" 
                                        className="create_article_title_input input_with_icon create_width" 
                                        id="create_title" 
                                        placeholder='Escribí el título'/>
                                </div>
                                <div className="create_article_textarea_container">
                                    <label htmlFor="create_paragraphs" className="create_article_textarea required">
                                        Artículo
                                    </label>
                                    <textarea 
                                        type="text" 
                                        className="create_paragraphs input_with_icon create_width" 
                                        id="create_paragraphs"
                                        placeholder='Escribí el artículo' 
                                    />
                                </div>
                                <div className="create_article_tags">
                                    <label htmlFor="create_tags" className="create_article_tags_container required">
                                        Tags
                                    </label>
                                    <input 
                                        type="text" 
                                        className="create_article_tags input_with_icon create_width" 
                                        id="create_tags" 
                                        placeholder='Escribí los tags, separados por ;'
                                    />
                                </div>

                                <div className="create_article_button_container">
                                    <button className="create_article_send_data btn-primary">
                                        Crear
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default CreateArticlePage