import "./home.css";

const HomeCarousel = () => {
  const carouselItems = [
    {
      imgUrl: "images/mens-1.jpg",
      imgAlt: "mens fashion",
      heading: "First slide label",
      content: "Some representative placeholder content for the first slide.",
    },
    {
      imgUrl: "images/womens-4.jpg",
      imgAlt: "women fashion",
      heading: "Second slide label",
      content: "Some representative placeholder content for the second slide.",
    },
    {
      imgUrl: "images/jwelery-1.jpg",
      imgAlt: "jwelery",
      heading: "Third slide label",
      content: "Some representative placeholder content for the third slide.",
    },
    {
      imgUrl: "images/electronics-2.jpg",
      imgAlt: "electronics",
      heading: "Fourth slide label",
      content: "Some representative placeholder content for the fourth slide.",
    },
  ];

  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-light slide mx-3"
    >
      <div className="carousel-indicators">
        {carouselItems.map((_, key) => {
          return (
            <button
              key={key}
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={key}
              className={key === 0 ? "active" : ""}
              aria-current={key === 0 ? "true" : "false"}
              aria-label={"slide " + key}
            ></button>
          );
        })}
      </div>
      <div className="carousel-inner">
        {carouselItems.map((item, key) => {
          return (
            <div
              key={key}
              className={key === 0 ? "carousel-item active" : "carousel-item"}
              data-bs-interval="10000"
            >
              <img
                src={item.imgUrl}
                className="d-block home_image"
                alt={item.imgAlt}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{item.heading}</h5>
                <p>{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HomeCarousel;
