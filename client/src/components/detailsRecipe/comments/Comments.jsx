import './comments.css'
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import * as commentService from "../../../services/commentService";
import useForm from "../../../hooks/useForm";
import AuthContext from "../../../contexts/authContext";
import { validateAddCommentForm } from "../../../utils/formValidation";

export default function Comments() {
    const { username } = useContext(AuthContext);
    const [comments, setComments] = useState([]);
    const { recipeId } = useParams();
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        commentService.getAll(recipeId).then(setComments);
    }, [recipeId]);

    const addCommentHandler = async (values) => {
        try {
            const newComment = await commentService.create(
                recipeId,
                values.comment
            );
            setComments((state) => [
                ...state,
                { ...newComment, owner: { username } },
            ]);
            onChange({ target: { name: "comment", value: "" } });
        } catch (error) {
            console.log(error);
            if (error.message && error.code === 401) {
                toast.error("You must be logged in to add a comment");
            } else {
                toast.error(error.message);
            }
        }
    };

    const { values, onChange, onSubmit } = useForm(
        (values) => {
            const errors = validateAddCommentForm(values);
            setFormErrors(errors);
            if (Object.keys(errors).length === 0) {
                addCommentHandler(values);
            }
        },
        {
            comment: "",
        }
    );

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
                                        </div>
                                    );
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
                            {formErrors.comment && (
                                <p className="error">{formErrors.comment}</p>
                            )}
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
