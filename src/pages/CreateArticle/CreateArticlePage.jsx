import './CreateArticlePage.css'
import HeaderComponent from "../../Components/Header/HEaderComponent"
import { useContext } from 'react'
import { ArticleContext } from '../../Context/articleContext'


function CreateArticlePage() {
    const {
        titulo,
        setTitulo,
        paragraphs,
        setParagraphs,
        tags,
        setTags
    } = useContext(ArticleContext)

    function handleFormSubmit(e) {
        e.preventDefault()

        console.log(titulo)
        console.log(paragraphs)
        console.log(tags)
    }

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
                            <form onSubmit={(e) => handleFormSubmit(e)} className="create_article_form">
                                {/* Título */}
                                <div className="create_article_titulo form_group">
                                    <label htmlFor="create_title" className="create_article_title_label required">
                                        Título
                                    </label>
                                    <input 
                                        type="text" 
                                        className="create_article_title_input input_with_icon create_width" 
                                        id="create_title" 
                                        placeholder='Escribí el título'
                                        value={titulo}
                                        onChange={(e) => {setTitulo(e.target.value)}}/>
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
                                        value={paragraphs}
                                        onChange={(e) => {setParagraphs(e.target.value)}}
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
                                        value={tags}
                                        onChange={(e) => {setTags(e.target.value)}}
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