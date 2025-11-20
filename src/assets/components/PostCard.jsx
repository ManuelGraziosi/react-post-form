function PostCard({post}) {
    return (<>
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">{post.title}</h4>
            </div>
            <div className="card-body">
                <p className="card-text">{post.body}</p>
            </div>
            <div className="card-footer">
                <cite title="Source Title">Autore: {post.author} - Pubblico: {post.public ? "SI": "NO"}</cite>
            </div>
        </div >
    </>)
}

export default PostCard;