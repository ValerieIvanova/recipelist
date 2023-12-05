import Path from "../../paths"

export default function RandomRecipe({
    _id,
    title,
    imageUrl,
    category,
    createdOn,
}) {
    return (
        <div className="col-lg-6">
            <div className="blog-box">
                <div className="post-media">
                    <a href={Path.DetailsRecipe(_id)} title="">
                        <img
                            src={imageUrl}
                            alt=""
                            className="img-fluid"
                        />
                        <div className="hovereffect">
                            <span className="" />
                        </div>
                    </a>
                </div>
                <div className="blog-meta">
                    <h4>
                        <a href={Path.DetailsRecipe(_id)}title="">
                            {title}
                        </a>
                    </h4>
                    <small>
                        <a href="blog-category-01.html" title="">
                            {category}
                        </a>
                    </small>
                    <small>
                        <a href="blog-category-01.html" title="">
                            {createdOn}
                        </a>
                    </small>
                </div>
            </div>
        </div>
    );
}
