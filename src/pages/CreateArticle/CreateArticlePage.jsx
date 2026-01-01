import './CreateArticlePage.css'
import HeaderComponent from "../../Components/Header/HEaderComponent"
import { useContext, useState } from 'react'
import { ArticleContext } from '../../Context/articleContext'


function CreateArticlePage() {
    const {
        titulo,
        setTitulo,
        paragraphs,
        setParagraphs,
        tags,
        setTags,
        verifyTitle,
        verifyArray,
        postNewAtricle
    } = useContext(ArticleContext)
    /* Warnings */
    const [titleWarning, setTitleWarning] = useState(false)
    const [articleWarning, setArticleWarning] = useState(false)
    const [tagWarning, setTagWarning] = useState(false)

    async function handleFormSubmit(e) {
        e.preventDefault()

        // Verificar que los campos sean correctos
        toggleWarningDisplay()
        if (!verifyTitle(titulo) || !verifyArray(paragraphs) || !verifyArray(tags)) {
            console.log('Alguno de los campos es inválido')
            return
        }

        const textToSent = paragraphs.split('\n')
        const tagsToSend = tags.split(';')

        // Enviar la información
        const data = {
            title: titulo,
            paragraphs: textToSent,
            tags: tagsToSend,
        }
        console.log(data)
        await postNewAtricle(data)
        

    }

    function toggleWarningDisplay() {
        /* Verifica si alguno de los campos es incorrecto */
        if (!verifyTitle(titulo)) {
            setTitleWarning(true)
        } else {
            setTitleWarning(false)
        }
        if (!verifyArray(paragraphs)) {
            setArticleWarning(true)
        } else {
            setArticleWarning(false)
        }
        if (!verifyArray(tags)) {
            setTagWarning(true)
        } else {
            setTagWarning(false)
        }
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
                                <div className="create_article_titulo create_div_margin_bottom">
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
                                    {titleWarning && <div className="form_warning">Título inválido</div>}
                                </div>
                                <div className="create_article_textarea_container create_div_margin_bottom">
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
                                    {articleWarning && <div className="form_warning">Artículo inválido</div>}
                                </div>
                                <div className="create_article_tags create_div_margin_bottom">
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
                                    {tagWarning && <div className="form_warning">Tags inválidos</div>}
                                </div>

                                <div className="create_article_button_container">
                                    <button type='submit' className="create_article_send_data btn-primary">
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