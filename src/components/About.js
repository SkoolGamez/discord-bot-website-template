import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-section" id="about-section">
        <div className="about-header">
          <h3 className="h-color">Why use Nova?</h3>
        </div>
        <div className="about-container">
          <div className="about-card">
            <div>
              <h4 className="h-color">⚡ Features</h4>
              <p className="p-color">
                Countless features, strongly defeating our competitors
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">✉️ 24/7 Support</h4>
              <p className="p-color">
                The biggest support community server for Nova available for
                you anytime.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">✏️ Customization</h4>
              <p className="p-color">
                Fully customizable config, that comes with the package. Customizable aim, how strong it is exc
              </p>
              <hr />
            </div>
          </div>
        </div>
        <p>
          <Link href="/commands" className="h-color no-decoration">
            Check out Commands &rarr;
          </Link>
        </p>

        <section className="about-stats">
          <div className="about-stats-card">
            <h4 className="h-color">10+</h4>
            <p className="p-color">Vouches</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">10+</h4>
            <p className="p-color">Total Users</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">2k+</h4>
            <p className="p-color">Total Games Played Without Ban</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
