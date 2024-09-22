import "@testing-library/jest-dom"
import { test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import RowSelectionInfo from "@/components/row-selection-info";


test("renders the row selection info", async ()  => {


  const exampleProps = {
    selectedRow: 1,
    totalRows: 10,
  }

  render(<RowSelectionInfo {...exampleProps} />)

  const rowSelectionInfo = await screen.findByTestId('row-selection');
  
  expect(rowSelectionInfo).toBeInTheDocument()

  
})

test ("renders the correct row selection info", async () => {
    const exampleProps = {
        selectedRow: 1,
        totalRows: 10,
    }
    
    render(<RowSelectionInfo {...exampleProps} />)
    
    const rowSelectionInfo = await screen.findByTestId('row-selection');
    
    expect(rowSelectionInfo).toHaveTextContent("1 of 10")
})