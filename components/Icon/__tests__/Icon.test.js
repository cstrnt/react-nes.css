import React from "react";
import Icon from "../index";
import renderer from "react-test-renderer";

test("The Icon should be rendered properly", () => {
  const component = renderer.create(<Icon icon="like" />);
  expect(component).toMatchSnapshot();
});

test("The Icon should adapt to its props", () => {
  let component = renderer.create(<Icon icon="like" size="small" />);
  expect(component).toMatchSnapshot();

  component = renderer.create(<Icon icon="like" size="medium" />);
  expect(component).toMatchSnapshot();

  component = renderer.create(<Icon icon="like" size="large" />);
  expect(component).toMatchSnapshot();

  component = renderer.create(<Icon icon="like" status="half" />);
  expect(component).toMatchSnapshot();

  component = renderer.create(<Icon icon="like" status="empty" />);
  expect(component).toMatchSnapshot();

  component = renderer.create(<Icon icon="like" transparent />);
  expect(component).toMatchSnapshot();
});
