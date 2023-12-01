// import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap"
import classes from "./HeadNav.module.css";
import { IoMdHome } from "react-icons/io";
const HeadNav = () => {
  return (
    <>
      <nav className={classes.navbar}>
        <ul>
          <li>
            <IoMdHome style={{ color: "white" }} />
          </li>

          <li>
            <a className={classes.tags} href="#">
              Patient Case
            </a>
            <span style={{ color: "white" , marginLeft:"5px" }}>   &gt; </span>
          </li>
          <li>
            <a className={classes.tags} href="#">
              Ahmed
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HeadNav;
