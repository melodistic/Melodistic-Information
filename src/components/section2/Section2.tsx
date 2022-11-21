import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import { AutoplayImage } from "./AutoPlay";
import ConfusionMatrix from "./ConfusionMatrix";
import styles from "/src/styles/section2/Section2.module.css";

const Section2 = () => {
  const renderNumber = (number: string) => {
    return (
      <div className={styles.NumberContainer}>
        <div className={styles.dot}></div>
        <div className={styles.Subheader}>{number}</div>
      </div>
    );
  };
  return (
    <div className={styles.Container} id="how-do-we-classify-mood-of-music">
      <div className={styles.Content}>
        <div className="header">How Do We Classify Mood Of Music?</div>
        <div className={styles.Group1}>
          <div>
            <div className={styles.Leftblock}>
              <div className={styles.Block}>
                {renderNumber("01.")}
                <div className={styles.Subheader}>Collect Dataset</div>
              </div>
            </div>
            <div>
              The music was randomly collected from YouTube Music in 6
              categories of mood. The audio files are converted to spectrogram
              images to use as input for the model.
            </div>
          </div>
          <img className={styles.Spectrogram} src="images/spectrogram.png" />
        </div>
        <div className={styles.Group2}>
          <div className={styles.Rightblock}>
            <div className={styles.Block}>
              {renderNumber("02.")}
              <div className={styles.Subheader}>Model Development</div>
            </div>
          </div>
          <img className={styles.model} src="images/model-development.png" />
          <div className={styles.text}>
            The spectrogram image will pass into a convolutional neural network
            and fully connected network before ending with softmax layer to get
            6 nodes represents percentage of each mood. However, there is the
            research suggested that positive mood music influences beneficial
            effects of exercise, two negative moods will be filtered out from
            the application.
          </div>
        </div>
        <div className={styles.Group3}>
          <div className={styles.Leftblock}>
            <div className={styles.Block}>
              {renderNumber("03.")}
              <div className={styles.Subheader}>Model Evaluation</div>
            </div>
          </div>
          <div>
            To achieve the best performance of the model, we experiment with 3
            types of convolutional layers: MobileNetV2, InceptionV3, and CNN
            model with multiple rounds of hyperparameter tuning.
          </div>
          <div className={styles.Autoplay}>
            <AutoplayImage />
          </div>
          <div className={styles.Confusion}>
            <ConfusionMatrix />
          </div>
          <table>
            <thead>
              <tr>
                <th>Model</th>
                <th>Accuracy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>MobileNetV2</td>
                <td>0.938</td>
              </tr>
              <tr>
                <td>InceptionV3</td>
                <td>0.852</td>
              </tr>
              <tr>
                <td>CNN Model</td>
                <td>0.832</td>
              </tr>
            </tbody>
          </table>
          <div>
            The best model to deploy in the real system is MobileNetV2 model
            (0.938).
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
