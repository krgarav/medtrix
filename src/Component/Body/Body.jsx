import Footer from "../Footer/Footer";
import MainPage from "../MainPage.jsx/MainPage";
import SecondNav from "../SecondNav/SecondNav";
import classes from "./Body.module.css";
const Body = () => {
  return (
    <>
      <div className={classes.mainbody} >
        <SecondNav />
        <MainPage/>
        <Footer/>
      </div>
    </>
  );
};
export default Body;
