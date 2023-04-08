import Slider from "react-slick";

export function Testimonials() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   swipeToSlide: true,
  //   // autoplay: true,
  //   // autoplaySpeed: 1500,
  //   cssEase: "linear",
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
    <section className="text-center pt-12 pb-20 px-6 md:px-24 lg:px-32 overflow-hidden bg-[#1d2029]">
      <h2 className="text-2xl capitalize mb-6 font-medium">Testimonials</h2>
      <div className="grid gap-16 md:gap-24 px-6">
        <div className="text-center">
          “Simply one of the best decisions I’ve made. The events and activities
          are super entertaining and I always look forward to the next one.”
        </div>
        <div className="text-center">
          “Interacting with people and engaging in games helped me build my
          confidence and self esteem.”
        </div>
        <div className="text-center">
          “Magno delivers entertainment in its purest form. Great place to meet
          interesting people, relax and forget my troubles.”
        </div>
        <div className="text-center">
          “The power of engaging in social activities is real. It’s been a
          roller-coaster and I’m loving it.”
        </div>
      </div>
    </section>
  );
}
