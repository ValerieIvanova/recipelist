import { Link } from "react-router-dom";

import formatDate from "../../../utils/formattedDate";
import Path from "../../paths";

export default function RecentPostsItem({
    _id,
    title,
    imageUrl,
    _createdOn,
    _owner
}) {

    const createdOn = formatDate(_createdOn);

    return (
        <Link
            to={Path.DetailsRecipe(_id)}
            className="list-group-item list-group-item-action flex-column align-items-start"
        >
            <div className="w-100 last-item justify-content-between">
                <img
                    src={imageUrl}
                    alt=""
                    className="img-fluid float-left"
                />
                <h5 className="mb-1">
                    {title}
                </h5>
                <small>{createdOn} </small>
                <small>by {_owner}</small>
            </div>
        </Link>
    );
}
