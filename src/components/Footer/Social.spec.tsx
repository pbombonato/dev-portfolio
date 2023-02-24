import React from "react";
import Social from "./Social";
import { render } from "@testing-library/react";

describe("<Social />", () => {
  it("should match snapshot", () => {
    const { container } = render(<Social />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
