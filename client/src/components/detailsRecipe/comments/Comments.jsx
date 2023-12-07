import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import * as commentService from "../../../services/commentService";
import useForm from "../../../hooks/useForm";
import AuthContext from "../../../contexts/authContext";

export default function Comments() {
    const { username } = useContext(AuthContext);
    const [comments, setComments] = useState([]);
    const { recipeId } = useParams();

    useEffect(() => {
        commentService.getAll(recipeId).then(setComments);
    }, [recipeId]);

    const addCommentHandler = async (values) => {
        const newComment = await commentService.create(
            recipeId,
            values.comment
        );

        setComments((state) => [
            ...state,
            { ...newComment, owner: { username } },
        ]);
        onChange({ target: { name: "comment", value: "" } });
    };

    const { values, onChange, onSubmit } = useForm(addCommentHandler, {
        comment: "",
    });

    return (
        <>
            <div className="custombox clearfix">
                <h4 className="small-title">{comments.length} Comments</h4>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="comments-list">
                            {comments.map(
                                ({
                                    _id,
                                    content,
                                    _createdOn,
                                    owner: { username },
                                }) => {
                                    const createdDate = new Date(_createdOn);
                                    const today = new Date();
                                    const timeDiff =
                                        today.getTime() - createdDate.getTime();
                                    const daysAgo = Math.floor(
                                        timeDiff / (1000 * 3600 * 24)
                                    );
                                    return (
                                    <div className="media" key={_id}>
                                        <a className="media-left" href="#">
                                            <img
                                                src="/upload/author.jpg"
                                                alt=""
                                                className="rounded-circle"
                                            />
                                        </a>
                                        <div className="media-body">
                                            <h4 className="media-heading user_name">
                                                {username}
                                                <small>
                                                    {daysAgo}
                                                    days ago
                                                </small>
                                            </h4>
                                            <p>{content}</p>
                                        </div>
                                    </div>)
                                }
                            )}
                        </div>
                        {comments.length === 0 && <p>No comments yet</p>}
                    </div>
                </div>
            </div>
            <hr className="invis1" />
            <div className="custombox clearfix">
                <h4 className="small-title">Leave a Reply</h4>
                <div className="row">
                    <div className="col-lg-12">
                        <form className="form-wrapper" onSubmit={onSubmit}>
                            <textarea
                                name="comment"
                                className="form-control"
                                placeholder="Your comment"
                                value={values.comment}
                                onChange={onChange}
                            />
                            <button type="submit" className="btn btn-primary">
                                Submit Comment
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}