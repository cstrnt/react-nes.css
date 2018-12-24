import React from "react";
import Input from "../index";
import renderer from "react-test-renderer";

test("The Input should be rendered properly", () => {
  const component = renderer.create(<Input />);
  expect(component).toMatchSnapshot();
});
