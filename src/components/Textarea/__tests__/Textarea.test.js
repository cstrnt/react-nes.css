import React from "react";
import Textarea from "../index";
import renderer from "react-test-renderer";

test("The Textarea should be rendered properly", () => {
  const component = renderer.create(<Textarea />);
  expect(component).toMatchSnapshot();
});
