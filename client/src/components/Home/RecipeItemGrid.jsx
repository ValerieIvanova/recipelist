import formatDate from "../../utils/formattedDate";
import ratingDisplay from "../../utils/ratingDisplay";

import { Link } from "react-router-dom";

import Path from "../paths";

export default function RecipeItemGrid({
    _id,
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
                    <Link to={Path.DetailsRecipe(_id)} title="">
                        <img src={imageUrl} alt="" className="img-fluid" />
                        <div className="hovereffect"></div>
                    </Link>
                </div>

                <div className="blog-meta big-meta">
                    <div className="rating">{rating}</div>
                    <h4>
                        <Link to={Path.DetailsRecipe(_id)} title="">
                            {title}
                        </Link>
                    </h4>
                    <p>{description}</p>
                    <small>
                        <Link to={Path.DetailsRecipe(_id)} title="">
                            {createdOnFormatted}
                        </Link>
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
