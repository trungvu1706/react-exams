import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";

storiesOf("Nut bam", module)
  .add("primary", () => <Button color="red">Add</Button>)
  .add("default", () => <Button color="blue">Click</Button>);
