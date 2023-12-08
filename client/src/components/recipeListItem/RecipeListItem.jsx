import "./recipeListItem.css"

import { Link } from "react-router-dom";
import formatDate from '../../utils/formattedDate';
import ratingDisplay from "../../utils/ratingDisplay";

import Path from "../paths"

export default function RecipeListItem({
    _owner,
    title,
    description,
    category,
    popularity,
    _createdOn,
    imageUrl,
    _id,
}) {
    const createdOnFormatted = formatDate(_createdOn);
    const rating = ratingDisplay(popularity);

    return (
        <>
            <div className="blog-box row">
                <div className="col-md-4">
                    <div className="post-media">
                        <Link to={Path.DetailsRecipe(_id)} title="">
                            <img src={imageUrl} alt="" className="img-fluid" />
                            <div className="hovereffect"></div>
                        </Link>
                    </div>
                </div>

                <div className="blog-meta big-meta col-md-8">
                    <div className="rating">
                        {rating}
                    </div>
                    <h4>
                        <Link to={Path.DetailsRecipe(_id)} title="">
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
                            {createdOnFormatted}
                        </a>
                    </small>
                    <small>
                        <a href="#" title="">
                            by {_owner}
                        </a>
                    </small>
                </div>
            </div>
            <hr className="invis" />
        </>
    );
}
