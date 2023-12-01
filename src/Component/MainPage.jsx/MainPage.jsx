import { useState } from "react";
import classes from "./MainPage.module.css";
import { FaPlay } from "react-icons/fa";
import { Button, Container } from "react-bootstrap";
const MainPage = () => {
  const [activeButton, setActiveButton] = useState(null);

  const buttonClickHandler = (buttonId) => {
    setActiveButton(buttonId);
  };
  return (
    <>
      <div className={classes.mainpage}>
        <h3 className={classes.heading}>
          "Clear or almost clear" skin has become a target in many guidelines
        </h3>
        <div className={classes.modal}>
          <h5>Canadian Association Academy.</h5>
          <Container
            style={{
              color: "white",
              backgroundColor: "rgb(81, 81, 236)",
              width: "90%",
              borderRadius: "10px",
            }}
          >
            <h6>PASI 90/100</h6>
            <p>response</p>
          </Container>
          <h5>
            Literature shows that clearance is an acheivable and appropriate
            goal in many patient.
          </h5>
        </div>
        <div className={classes.container}>
          <div className={classes.buttoncontainer}>
            <FaPlay className={classes.button} />
          </div>
          <div className={classes.rangeslider}>
            <button
              onClick={() => buttonClickHandler(1)}
              className={
                activeButton === 1
                  ? classes.sliderbutton
                  : classes.disabledbutton
              }
            >
              2011
            </button>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <button
              onClick={() => buttonClickHandler(2)}
              className={
                activeButton === 2
                  ? classes.sliderbutton
                  : classes.disabledbutton
              }
            >
              2017
            </button>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <button
              onClick={() => buttonClickHandler(3)}
              className={
                activeButton === 3
                  ? classes.sliderbutton
                  : classes.disabledbutton
              }
            >
              2019
            </button>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <button
              onClick={() => buttonClickHandler(4)}
              className={
                activeButton === 4
                  ? classes.sliderbutton
                  : classes.disabledbutton
              }
            >
              2020
            </button>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <button
              onClick={() => buttonClickHandler(5)}
              className={
                activeButton === 5
                  ? classes.sliderbutton
                  : classes.disabledbutton
              }
            >
              2021
            </button>
          </div>
        </div>

        <footer className={classes.footer}>
          <ol>
            <p>
              BSA,body surface are; DLQI dermatology.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <li>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </li>
          </ol>
        </footer>
      </div>
    </>
  );
};
export default MainPage;
