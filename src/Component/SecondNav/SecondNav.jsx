import { useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import classes from "./SecondNav.module.css";
const SecondNav = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };
  return (
    <>
      <div className={classes.secondNav}>
        <div className={classes.backimg}>
          <BsPersonFill
            style={{
              fontSize: "1.6rem",
              color: "lightblue",
              marginTop: "10px",
              marginLeft: "10px",
            }}
          />
        </div>

        <div className={classes.navs}>
          <nav className={classes.navitems}>
            <div className={` ${activeItem === 0 ? classes.active : ""}`}>
              <a onClick={() => handleItemClick(0)} href="#patient">
                Patient Presentation, History, and Diagnosis
              </a>
            </div>
            <span>|</span>
            <div className={`${activeItem === 1 ? classes.active : ""}`}>
              <a onClick={() => handleItemClick(1)} href="#patient">
                Treatment Target
              </a>
            </div>
            <span>|</span>
            <div className={`${activeItem === 2 ? classes.active : ""}`}>
              <a onClick={() => handleItemClick(2)} href="#patient">
                Management
              </a>
            </div>
            <span>|</span>
            <div className={`${activeItem === 3 ? classes.active : ""}`}>
              <a onClick={() => handleItemClick(3)} href="#patient">
                Follow-up Visit
              </a>
            </div>
            <span>|</span>
            <div className={`${activeItem === 4 ? classes.active : ""}`}>
              <a onClick={() => handleItemClick(4)} href="#patient">
                Case Summary
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SecondNav;
