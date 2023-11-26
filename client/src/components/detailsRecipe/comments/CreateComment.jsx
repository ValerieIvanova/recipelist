export default function CreateComment() {
    return (
        <>
            <div className="custombox clearfix">
                <h4 className="small-title">Leave a Reply</h4>
                <div className="row">
                    <div className="col-lg-12">
                        <form className="form-wrapper">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Your name"
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email address"
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Website"
                            />
                            <textarea
                                className="form-control"
                                placeholder="Your comment"
                                defaultValue={""}
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
