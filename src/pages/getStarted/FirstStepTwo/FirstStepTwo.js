import React, { Fragment } from "react";
import GetStartedNav from "../GetStartedNav/GetStartedNav";
import GeneralFooter from "../../../components/layout/GeneralFooter/GeneralFooter";
import Content from "./Content/Content";

function FirstStepTwo() {
  return (
    <Fragment>
      <GetStartedNav />
      <Content />
      <GeneralFooter backgroundColor="#f3f3f3" />
    </Fragment>
  );
}

export default FirstStepTwo;
