import React from "react";
import List from "../index";
import renderer from "react-test-renderer";

test("The List should be rendered properly", () => {
  const component = renderer.create(
    <List>
      <ul>1</ul>
      <ul>2</ul>
    </List>
  );
  expect(component).toMatchSnapshot();
});

test("The List should be rendered properly", () => {
  const component = renderer.create(<List listStyle="circle" />);
  expect(component).toMatchSnapshot();
});
