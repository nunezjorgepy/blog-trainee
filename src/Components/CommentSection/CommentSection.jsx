import Comment from "../Comment/Comment"

function CommentSection() {
    return (
        <div className="comment_group">
            {/* Comentario */}
            <Comment />
            {/* Respuesta */}
            <Comment isAnswer />
        </div>
    )
}

export default CommentSection