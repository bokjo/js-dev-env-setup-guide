/**
 * Created by bstojchevski on 5/16/2017.
 */
import "./index.css";
import numeral from "numeral";

const courseValue = numeral(1000).format("$0,0.00");
debugger;                                                       //eslint-disable-line no-debugger
console.log(`I would pay ${courseValue} for the same course!`); //eslint-disable-line no-console
