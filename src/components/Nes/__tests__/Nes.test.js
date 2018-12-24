import React from "react";
import Nes from "../index";
import renderer from "react-test-renderer";

test("The Nes should be rendered properly", () => {
  const component = renderer.create(<Nes character="logo" />);
  expect(component).toMatchSnapshot();
});

test("The Nes should be rendered properly with snes prop", () => {
  const component = renderer.create(<Nes character="logo" snes />);
  expect(component).toMatchSnapshot();
});
