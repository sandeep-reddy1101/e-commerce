const NavbarSearch = () => {
    return (
        <form className="d-flex me-2 ms-auto" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              <span className="d-flex">
                <span>
                  <i className="bi bi-search"></i>
                </span>
                <span className="ps-2">Search</span>
              </span>
            </button>
          </form>
    )
}

export default NavbarSearch;