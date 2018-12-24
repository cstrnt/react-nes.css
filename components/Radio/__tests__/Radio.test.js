import React from "react";
import Radio from "../index";
import renderer from "react-test-renderer";

test("The Radio should be rendered properly", () => {
  const component = renderer.create(<Radio />);
  expect(component).toMatchSnapshot();
});
