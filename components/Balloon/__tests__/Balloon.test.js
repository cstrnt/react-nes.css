import React from "react";
import Balloon from "../index";
import renderer from "react-test-renderer";

test("The Balloon should be rendered properly", () => {
  const component = renderer.create(<Balloon />);
  expect(component).toMatchSnapshot();
});

test("The Balloon should adapt to its props", () => {
  const component = renderer.create(<Balloon direction="right" />);
  expect(component).toMatchSnapshot();
});
