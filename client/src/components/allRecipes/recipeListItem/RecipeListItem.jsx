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
                        <a href="food-single.html" title="">
                            <img src={imageUrl} alt="" className="img-fluid" />
                            <div className="hovereffect"></div>
                        </a>
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
                        <a href="food-single.html" title="">
                            {title}
                        </a>
                    </h4>
                    <p>{description}</p>
                    <small>
                        <a href="blog-category-01.html" title="">
                            {category}
                        </a>
                    </small>
                    <small>
            <a href="food-single.html" title="">
              {createdOn}
            </a>
          </small>
                </div>
            </div>
            <hr className="invis" />
        </>
    );
}
