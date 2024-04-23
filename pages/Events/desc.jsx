import styles from "./Events.module.css";

const Desc = () => {
  return (
    <div>
      <h2
        style={{
          fontSize: "40px",
        }}
      >
        Events
      </h2>
      <div>
        <img
          src="/images/aboutpic.jpg"
          alt="Who We Are"
          className={styles.events}
        />
      </div>
      {/* rempved it from <p> className="description-container" */}
      <div>
        <p>
          The IEEE PIE Kerala Section proudly recognizes the outstanding
          achievements of its members and the exceptional impact of our events.
          These accomplishments serve as a testament to the dedication of our
          team and our commitment to fostering technological innovation and
          entrepreneurship.
        </p>
      </div>
      {/* <div className="member-container">
        <div data-aos="zoom-in-up">
          <div className="noofm">
            <p className="orange-text">30+</p>
            <p className="white-text">EVENTS</p>
          </div>
        </div>
        <div data-aos="zoom-in-up">
          <div className="noofm">
            <p className="orange-text">300+</p>
            <p className="white-text">PARTICIPANTS</p>
          </div>
        </div>
        <div data-aos="zoom-in-up">
          <div className="noofm">
            <p className="orange-text">6</p>
            <p className="white-text">AWARDS</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Desc;
