import Slider from "react-slick";

export function Activities() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="text-center py-6 px-6 ">
      <h2 className="text-xl capitalize mb-3">Our events & activities </h2>
      {/* image slider */}
      <Slider {...settings}>
        <div>
          <h1> Parties</h1>
        </div>
        <div>
          <h1> Hangouts</h1>
        </div>
        <div>
          <h1> Movie dates</h1>
        </div>
        <div>
          <h1> Concerts </h1>
        </div>
        <div>
          <h1> Sporting activities </h1>
        </div>
        <div>
          <h1> Video games</h1>
        </div>
        <div>
          <h1> Board games </h1>
        </div>
        <div>
          <h1> Painting </h1>
        </div>
        <div>
          <h1> Excursions</h1>
        </div>
        <div>
          <h1> Workshops </h1>
        </div>
      </Slider>
    </div>
  );
}
