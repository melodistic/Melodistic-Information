import { useEffect, useState } from "react";
import styles from "/src/styles/section2/ConfusionMatrix.module.css";
interface ConfusionMatrixData {
  image: string;
  label: string;
}

const ConfusionMatrix = () => {
  const [renderIndex, setRenderIndex] = useState(0);

  const confusionList: Array<ConfusionMatrixData> = [
    {
      image: "images/mobilenet.png",
      label: "MobileNetV2",
    },
    {
      image: "images/inception.png",
      label: "InceptionV3",
    },
    {
      image: "images/cnn.png",
      label: "CNN Model",
    },
  ];
  const renderConfusion = (index: number, hide: boolean) => {
    const data = confusionList[index];
    return (
      <div
        className={`${styles.ConfusionMatrix} ${
          hide ? styles.hide : styles.show
        }`}
        key={index}
      >
        <img src={data.image} alt={data.label} loading="lazy" />
        <div>{data.label}</div>
      </div>
    );
  };
  const renderDot = (index: number, isActive: boolean) => {
    return (
      <div
        className={`${styles.dot} ${
          isActive ? styles.active : styles.inactive
        }`}
        onClick={() => setRenderIndex(index)}
        key={index}
      ></div>
    );
  };
  return (
    <div className={styles.ConfusionContainer}>
      {confusionList.map((_, index) => {
        return renderConfusion(index, index == renderIndex ? false : true);
      })}
      <div className={styles.DotController}>
        {confusionList.map((_, index) => {
          return renderDot(index, index == renderIndex ? true : false);
        })}
      </div>
    </div>
  );
};

export default ConfusionMatrix;
