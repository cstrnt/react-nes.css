import React from "react";
import Avatar from "../index";
import renderer from "react-test-renderer";

test("The Avatar should be rendered properly", () => {
  const component = renderer.create(
    <Avatar src="https://www.gravatar.com/avatar" />
  );
  expect(component).toMatchSnapshot();
});

test("The Avatar should adapt to the size prop", () => {
  let component = renderer.create(
    <Avatar size="small" src="https://www.gravatar.com/avatar" />
  );
  expect(component).toMatchSnapshot();

  component = renderer.create(
    <Avatar size="medium" src="https://www.gravatar.com/avatar" />
  );
  expect(component).toMatchSnapshot();

  component = renderer.create(
    <Avatar size="large" src="https://www.gravatar.com/avatar" />
  );
  expect(component).toMatchSnapshot();
});

test("The Avatar should adapt to the rounded prop", () => {
  const component = renderer.create(
    <Avatar rounded src="https://www.gravatar.com/avatar" />
  );
  expect(component).toMatchSnapshot();
});
