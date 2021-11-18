import { render } from "@testing-library/react";
import App from "./App";

const Component = () => {
  return <App />;
};

describe("<App/>", () => {
  it("render", () => {
    const { container } = render(Component());

    expect(container).toMatchSnapshot();
  });
});
