import styles from "/src/styles/section6/Section6.module.css";

interface Member {
  name: string;
  lastname: string;
  quote: string;
  image: string;
}
const Section6 = () => {
  const members: Array<Member> = [
    {
      image: "images/grape.png",
      name: "Kittiyaporn",
      lastname: "Takrudthieng",
      quote: "You can't be a bad designer if you don't put your work on",
    },
    {
      image: "images/op.png",
      name: "Kaewket",
      lastname: "Saelee",
      quote: "Automation for Jira assigned this issue to you",
    },
    {
      image: "images/gop.png",
      name: "Wisarut",
      lastname: "Kitticharoenphonngam",
      quote: "Tests can't fail, if there aren't any tests",
    },
  ];
  return (
    <div className={styles.Container} id="about-us">
      <div className={styles.Gradientbottom}></div>
      <div className={styles.BlackTriangle}></div>
      <img src="images/melody.png" className={styles.Melody} alt="melody" />
      <div className={styles.Content}>
        <div className="header">About Us</div>
        {members.map((member, index) => {
          return (
            <div className={styles.Member} key={index}>
              <img src={member.image} className={styles.Image} alt="member" />
              <div className={styles.Name}>{member.name}</div>
              <div className={styles.Lastname}>{member.lastname}</div>
              <div className={styles.Quote}>
                <div>“</div>
                <div>{member.quote}</div>
                <div>“</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section6;
