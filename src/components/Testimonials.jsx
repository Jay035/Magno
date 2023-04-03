import Slider from "react-slick";

export function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    // autoplay: true,
    // autoplaySpeed: 1500,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="text-center pt-12 pb-20 px-6 overflow-hidden bg-[#1d2029]">
      <h2 className="text-2xl capitalize mb-6 font-medium">Testimonials</h2>
      <Slider {...settings}>
        
        <div className="text-center mb-4 md:mb-24 px-6">
          “Subscribing to Magno have been one of the best decisions I’ve made.
          The events are super entertaining and I always look forward to the
          next one.”
        </div>
        <div className="text-center mb-4 md:mb-24 px-6">
          “I used to lack confidence but being on Magno helped me address that.
          I feel more confident now.”
        </div>
        <div className="text-center mb-4 md:mb-24 px-6">
          “Magno delivers entertainment in its pure form. Great place to meet
          interesting people, relax and forget my troubles.”
        </div>
        <div className="text-center mb-4 md:mb-24 px-6">
          “The power of engaging in social activities is real. It’s been a
          roller-coaster since I subscribed but I’m loving it.”
        </div>
      </Slider>
    </div>
  );
}
