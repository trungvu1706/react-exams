import React from "react";
import { configure, addDecorator } from "@storybook/react";

const req = require.context("../src/components", true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(req);
}

const withGlobal = (cb) => {
  return <React.Fragment>{cb()}</React.Fragment>;
};

addDecorator(withGlobal);
configure(loadStories, module);
