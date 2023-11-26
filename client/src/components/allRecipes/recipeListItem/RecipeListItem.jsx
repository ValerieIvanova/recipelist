import { Link } from "react-router-dom";

export default function RecipeListItem({
    title,
    description,
    category,
    ingredients,
    popularity,
    instructions,
    createdOn,
    imageUrl,
    _id,
}) {
    return (
        <>
            <div className="blog-box row">
                <div className="col-md-4">
                    <div className="post-media">
                        <Link to={`/recipes/${_id}`} title="">
                            <img src={imageUrl} alt="" className="img-fluid" />
                            <div className="hovereffect"></div>
                        </Link>
                    </div>
                </div>

                <div className="blog-meta big-meta col-md-8">
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <h4>
                        <Link to={`/recipes/${_id}`} title="">
                            {title}
                        </Link>
                    </h4>
                    <p>{description}</p>
                    <small>
                        <a href="#" title="">
                            {category}
                        </a>
                    </small>
                    <small>
            <a href="#" title="">
              {createdOn}
            </a>
          </small>
                </div>
            </div>
            <hr className="invis" />
        </>
    );
}
