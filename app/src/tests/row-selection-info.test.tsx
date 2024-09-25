import "@testing-library/jest-dom"
import { test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import RowSelectionInfo from "@/components/row-selection-info";

const exampleProps = {
  selectedRow: 1,
  totalRows: 10,
}

const renderRowSelectionInfo = () => {
  return render(<RowSelectionInfo {...exampleProps} />)
}

test("renders the row selection info", async ()  => {
  
  renderRowSelectionInfo()
  const rowSelectionInfo = await screen.findByTestId('row-selection');
  
  expect(rowSelectionInfo).toBeInTheDocument()

  
})

test ("renders the correct row selection info", async () => {

    renderRowSelectionInfo()    
    const rowSelectionInfo = await screen.findByTestId('row-selection');
    
    expect(rowSelectionInfo).toHaveTextContent("1 of 10 rows selected")
})