import { useNavigate } from "react-router-dom";

const NavbarSearch = () => {
  const navigate = useNavigate();

  const searchSubmit = () => {
    const searchValue = document.getElementById("searchInput").value;
    if (searchValue) {
      navigate(`/search/products/${searchValue}`);
    }
  };

  return (
    <form className="d-flex me-2 ms-auto">
      <input
        className="form-control me-2"
        type="text"
        placeholder="Search"
        aria-label="Search"
        id="searchInput"
      />
      <button
        className="btn btn-outline-success"
        type="button"
        onClick={searchSubmit}
      >
        <span className="d-flex">
          <span>
            <i className="bi bi-search"></i>
          </span>
          <span className="ps-2">Search</span>
        </span>
      </button>
    </form>
  );
};

export default NavbarSearch;
