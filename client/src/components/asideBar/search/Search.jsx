import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Path from "../../paths";

export default function Search() {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const onChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(Path.Search(searchQuery));
    };

    return (
        <>
            <div className="widget">
                <h2 className="widget-title">Search</h2>
                <form className="search-form" onSubmit={handleSubmit}>
                    <input
                        id="search"
                        type="text"
                        className="form-control"
                        placeholder="Search on the site"
                        onChange={onChange}
                    />
                </form>
            </div>
        </>
    );
}
