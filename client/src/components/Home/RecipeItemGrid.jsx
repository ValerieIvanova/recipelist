import formatDate from "../../utils/formattedDate";
import ratingDisplay from "../../utils/ratingDisplay";

import popularityArray from "../../utils/ratingDisplay";

export default function RecipeItemGrid({
    title,
    description,
    popularity,
    imageUrl,
    _createdOn,
    owner,
}) {
    const createdOnFormatted = formatDate(_createdOn);
    const rating = ratingDisplay(popularity);

    return (
        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <div className="blog-box">
                <div className="post-media">
                    <a href="recipe/:recipeId" title="">
                        <img src={imageUrl} alt="" className="img-fluid" />
                        <div className="hovereffect"></div>
                    </a>
                </div>

                <div className="blog-meta big-meta">
                    <div className="rating">
                        {rating}
                    </div>
                    <h4>
                        <a href="/recipe1" title="">
                            {title}
                        </a>
                    </h4>
                    <p>{description}</p>
                    <small>
                        <a href="/recipe1" title="">
                            {createdOnFormatted}
                        </a>
                    </small>
                    <small>
                        <a href="#" title="">
                            by {owner}
                        </a>
                    </small>
                </div>
            </div>
        </div>
    );
}
