import React from "react";
import Progress from "../index";
import renderer from "react-test-renderer";

test("The Progress should be rendered properly", () => {
  const component = renderer.create(<Progress value="90" max="100" />);
  expect(component).toMatchSnapshot();
});

test("The Progress should be rendered properly with props", () => {
  const component = renderer.create(
    <Progress color="success" value="90" max="100" />
  );
  expect(component).toMatchSnapshot();
});
