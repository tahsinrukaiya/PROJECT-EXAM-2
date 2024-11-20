export default function SearchForm() {
    return (
        <>
            <div className="col-10 col-md-6 col-lg-6 search-form-container">
                <form className="search-form">
                    <div className="d-flex">
                        <div className="p-2 flex-fill bd-highlight"><input
                            type="search"
                            className="form-control rounded search-input"
                            placeholder="search"
                            aria-label="Search"
                            aria-describedby="search-addon"
                        /></div>
                        <div className="p-2 justify-content-start"> <button
                            type="submit"
                            className="search-btn rounded-pill px-4 pt-1 pb-1">
                            Search
                        </button></div>
                    </div>
                </form>
            </div>
        </>
    )
}