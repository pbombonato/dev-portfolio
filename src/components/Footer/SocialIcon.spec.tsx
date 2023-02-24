import React from "react";
import SocialIcon from "./SocialIcon";
import { render, screen } from "@testing-library/react";
import { GitHub } from "@mui/icons-material";
import '@testing-library/jest-dom';

const props = {
  title: "title 1",
  link: "link/link",
  icon: <GitHub />,
};

describe("SocialIcon", () => {
  it("should render the icon", () => {
    render(<SocialIcon {...props} />);
    const icon = screen.getByTestId("GitHubIcon");

    expect(icon).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = render(<SocialIcon {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
