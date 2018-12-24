import React from "react";
import Checkbox from "../index";
import renderer from "react-test-renderer";

test("Checkbox Radio should be rendered properly", () => {
  const component = renderer.create(<Checkbox />);
  expect(component).toMatchSnapshot();
});
