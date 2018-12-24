import React from "react";
import Button from "../index";
import renderer from "react-test-renderer";

test("The Button should be rendered properly", () => {
  const component = renderer.create(<Button>Test</Button>);
  expect(component).toMatchSnapshot();
});

test("The Button should take the color property", () => {
  let component = renderer.create(<Button color="success">Test</Button>);
  expect(component).toMatchSnapshot();

  component = renderer.create(<Button color="warning">Test</Button>);
  expect(component).toMatchSnapshot();

  component = renderer.create(<Button color="success">Test</Button>);
  expect(component).toMatchSnapshot();

  component = renderer.create(<Button color="primary">Test</Button>);
  expect(component).toMatchSnapshot();

  component = renderer.create(<Button color="error">Test</Button>);
  expect(component).toMatchSnapshot();

  component = renderer.create(<Button color="disabled">Test</Button>);
  expect(component).toMatchSnapshot();
});
