import { Fragment } from "react";
import head from '../../assets/head.jpg'
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";


const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Ordering App</h1>
       
        <HeaderCartButton onclick={props.onSHowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={head} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;