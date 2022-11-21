import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/css/skyblue";
import "/src/styles/section2/Autoplay.css";

interface ConfusionMatrixData {
  image: string;
  label: string;
}
export const AutoplayImage = () => {
  const options = {
    type: "loop",
    gap: "5rem",
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    interval: 4000,
    height: "calc(80vw / 1.24 + 36px)",
  };

  const confusionList: Array<ConfusionMatrixData> = [
    {
      image: "images/mobilenet.webp",
      label: "MobileNetV2",
    },
    {
      image: "images/inception.webp",
      label: "InceptionV3",
    },
    {
      image: "images/cnn.webp",
      label: "CNN Model",
    },
  ];

  return (
    <div style={{ paddingTop: "2rem" }}>
      <Splide
        options={options}
        aria-labelledby="autoplay-example-heading"
        hasTrack={false}
      >
        <div style={{ position: "relative" }}>
          <SplideTrack>
            {confusionList.map((slide) => (
              <SplideSlide key={slide.image}>
                <img src={slide.image} alt={slide.label} loading="lazy" />
                <div style={{ textAlign: "center" }}>{slide.label}</div>
              </SplideSlide>
            ))}
          </SplideTrack>
        </div>
      </Splide>
    </div>
  );
};
