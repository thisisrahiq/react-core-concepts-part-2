export default function Post ({post}){




    return (
        <div className="card">
            <h2 className="card">{post.title}</h2>
            <h3>

            {post.body}

            </h3>
        </div>
    )
}