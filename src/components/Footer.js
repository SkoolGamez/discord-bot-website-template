import Link from "next/link";
import Image from "next/image";
import botOnlineStatus from "../utils/images/botStatus.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="footer">
        <div className="footer-sec1">
          <div className="footer-header">
            <ul>
              <li>
                <Link className="h-color" href="/">
                  nova.gg
                </Link>
                <span
                  style={{
                    fontSize: "12px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  className="p-color"
                >
                  <Image
                    src={botOnlineStatus}
                    width={20}
                    height={20}
                    alt="online-status"
                    className="onlineStatus"
                  />{" "}
                  Bot is online!
                </span>
              </li>
            </ul>
          </div>
          <div className="footer-items">
            <ul>
              <li>
                <Link className="p-color" href="/commands">
                  /features
                </Link>
              </li>
              <li>
                <Link className="p-color" href="#">
                  /support
                </Link>
              </li>
              <li>
                <Link className="p-color" href="#">
                  /discord-server
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-sec2">
          <hr />
          <div>
            <p className="p-color">
              Created with ❤️ by{" "}
              <Link
                href="https://discord.com/user/1157793025016205466"
                className="h-color no-decoration"
              >
                Stellarox / Swix
              </Link>
            </p>
            <p className="p-color">{year} &copy; All rights reserved!</p>
          </div>
          <div className="footer-sec2-link">
            <Link className="p-color no-decoration" href="#">
              /buy
            </Link>
            <Link
              target="_blank"
              className="p-color no-decoration"
              href="https://discord.gg/4Zvbr39qvr"
            >
              /buy
            </Link>
            <Link className="p-color no-decoration" href="https://discord.gg/4Zvbr39qvr">
              /privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
