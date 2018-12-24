import React from "react";
import Table from "../index";
import renderer from "react-test-renderer";

test("The Table should be rendered properly", () => {
  const component = renderer.create(<Table />);
  expect(component).toMatchSnapshot();
});

test("The Table should be rendered properly with props", () => {
  let component = renderer.create(<Table bordered />);
  expect(component).toMatchSnapshot();

  component = renderer.create(<Table centered />);
  expect(component).toMatchSnapshot();

  component = renderer.create(<Table dark />);
  expect(component).toMatchSnapshot();

  component = renderer.create(<Table dark centered bordered />);
  expect(component).toMatchSnapshot();
});
