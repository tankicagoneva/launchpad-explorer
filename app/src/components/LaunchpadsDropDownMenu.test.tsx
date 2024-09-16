import "@testing-library/jest-dom"
import { test, expect, vi } from "vitest"
import { render } from "@testing-library/react"
import LaunchpadsDropDownMenu from "./LaunchpadsDropDownMenu"

test("renders the dropdown menu", () => {
  const exampleProps = {
    image: "test-image.jpg",
    status: "Test Status",
    handleClick: vi.fn(),
    viewImageFunction: vi.fn(),
    readMoreLink: "https://example.com",
  }

  const { getByTestId } = render(<LaunchpadsDropDownMenu {...exampleProps} />)
  const button = getByTestId("actions")
  expect(button).toHaveBeenCalled()
})
