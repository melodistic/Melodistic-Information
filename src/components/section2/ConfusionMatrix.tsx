import { useState } from "react";
import styles from "/src/styles/section2/ConfusionMatrix.module.css";
interface ConfusionMatrixData {
  image: string;
  label: string;
}

const ConfusionMatrix = () => {
  const [renderIndex, setRenderIndex] = useState(0);

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
  const renderConfusion = (index: number) => {
    const data = confusionList[index];
    return (
      <div
        className={styles.ConfusionMatrix}
        key={index}
      >
        <img src={data.image} alt={data.label} loading="lazy" />
        <div>{data.label}</div>
      </div>
    );
  };
  return (
    <div className={styles.ConfusionContainer}>
      {confusionList.map((_, index) => {
        return renderConfusion(index);
      })}
    </div>
  );
};

export default ConfusionMatrix;
