import React from "react";
import Container from "../index";
import renderer from "react-test-renderer";

test("The Container should be rendered properly", () => {
  const component = renderer.create(<Container>Test</Container>);
  expect(component).toMatchSnapshot();
});

test("The Container should react to its props", () => {
  let component = renderer.create(<Container dark>Test</Container>);
  expect(component).toMatchSnapshot();

  component = renderer.create(<Container rounded>Test</Container>);
  expect(component).toMatchSnapshot();

  component = renderer.create(<Container title="Hallo">Test</Container>);
  expect(component).toMatchSnapshot();
});
