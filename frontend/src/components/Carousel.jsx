import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.scss";

function MyCarousel() {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass="carousel-item-padding-10-px"
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      <div className="item">
        <img src="https://picsum.photos/350?random=1" alt="testest" />
        <div className="itemContent">
          <h2>Pierre le BG</h2>
          <p>
            Salut Pierre t'es trop un bg même si tu arrives pas à faire marcher
            mon carousel.
          </p>
        </div>
      </div>
      <div className="item">
        <img src="https://picsum.photos/350?random=2" alt="testest" />
        <div className="itemContent">
          <h2>Pierre le BG</h2>
          <p>
            Salut Pierre t'es trop un bg même si tu arrives pas à faire marcher
            mon carousel.
          </p>
        </div>
      </div>
      <div className="item">
        <img src="https://picsum.photos/350?random=3" alt="testest" />
        <div className="itemContent">
          <h2>Pierre le BG</h2>
          <p>
            Salut Pierre t'es trop un bg même si tu arrives pas à faire marcher
            mon carousel.
          </p>
        </div>
      </div>
      <div className="item">
        <img src="https://picsum.photos/350?random=4" alt="testest" />
        <div className="itemContent">
          <h2>Pierre le BG</h2>
          <p>
            Salut Pierre t'es trop un bg même si tu arrives pas à faire marcher
            mon carousel.
          </p>
        </div>
      </div>
    </Carousel>
  );
}

export default MyCarousel;
