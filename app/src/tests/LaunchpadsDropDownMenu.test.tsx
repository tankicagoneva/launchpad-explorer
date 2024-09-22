import "@testing-library/jest-dom"
import { test, expect, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import LaunchpadsDropDownMenu from "@/components/LaunchpadsDropDownMenu"

test("renders the dropdown menu", async ()  => {


  const exampleProps = {
    image: "test-image.jpg",
    status: "Test Status",
    handleClick: vi.fn(),
    viewImageFunction: vi.fn(),
    readMoreLink: "https://example.com",
  }

  render(<LaunchpadsDropDownMenu {...exampleProps} />)

  const actionsButton = await screen.findByTestId('actions');
  fireEvent.click(actionsButton)
  
  expect(actionsButton).toBeInTheDocument()

  
})
