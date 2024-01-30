import Link from "next/link";

const JoinNow = () => {
  return (
    <>
      <section className="joinUs">
        <div className="h-color joinUs-header">
          <h3>Join us now!</h3>
        </div>
        <div className="joinUs-para p-color">
          Get Nova Assist, And Use In-Game! {" "}
        </div>
        <button className="btn">
          <Link className="h-color no-decoration" href="#">
            Purchase Now!
          </Link>
        </button>
      </section>
    </>
  );
};

export default JoinNow;
