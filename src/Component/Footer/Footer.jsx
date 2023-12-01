import logo from "../../assets/logo.png";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <>
      <div className={classes.footer}>
        <img src={logo} alt="skyrizi" className={classes.image}/>
      </div>
    </>
  );
};
export default Footer;
