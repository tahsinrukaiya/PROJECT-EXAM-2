import PropTypes from "prop-types";

export default function SearchForm({ onSearch }) {
    const handleInputChange = (e) => {
        onSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="col-8 col-md-6 col-lg-10 mx-5 search-form-container">
                <form className="search-form" onSubmit={handleSubmit}>
                    <div className="d-flex bd-highlight search-form">
                        <div className="p-2 flex-fill bd-highlight">
                            <input
                                type="search"
                                className="form-control rounded search-input"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="search-addon"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="p-2 flex-fill align-items-start bd-highlight">
                            <i className="fa-solid fa-magnifying-glass mt-1 search-icon"></i></div>
                    </div>
                </form>
            </div>
        </>
    );
}

SearchForm.propTypes = {
    onSearch: PropTypes.func.isRequired,
};
