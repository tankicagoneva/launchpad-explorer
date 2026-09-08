import "@testing-library/jest-dom"
import { test, expect, vi } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import RowsPerPageSelector from "@/components/rows-per-page-selector"

const onPageSizeChangeSpy = vi.fn();

const exampleProps = {
  pageSize: 10,
  onPageSizeChange: onPageSizeChangeSpy,
}

Object.defineProperties(HTMLElement.prototype, {
  hasPointerCapture: { value: () => false },
  setPointerCapture: { value: () => undefined },
  releasePointerCapture: { value: () => undefined },
  scrollIntoView: { value: () => undefined },
});

const renderRowsPerPageSelector = () => {
  return render(<RowsPerPageSelector {...exampleProps} />)
}

test("renders the row per page selector", async ()  => {

  renderRowsPerPageSelector()
  const rowsPerPageSelector = await screen.findByTestId('row-per-page-selection');
  
  expect(rowsPerPageSelector).toBeInTheDocument()
  
})

test ("renders the correct row per page selector", async () => {

    renderRowsPerPageSelector()    
    const rowsPerPageSelector = await screen.findByTestId('row-per-page-selection');
    
    expect(rowsPerPageSelector).toHaveTextContent("Rows per page")
});


test("renders the correct page sizes", async () => {

    renderRowsPerPageSelector();    
    const user = userEvent.setup();

    const rowsPerPageSelector = await screen.findByTestId('row-per-page-selection');
    
    expect(rowsPerPageSelector).toBeInTheDocument();

    const currentPageSize = screen.getByText('10');
    expect(currentPageSize).toBeInTheDocument();
    

    const pageSizes = [20, 30, 40, 50]; 
    for (const pageSize of pageSizes) {

      const button = screen.getByRole('combobox');
      await user.click(button);
      const optionButton = await screen.findByRole('option', { name: pageSize.toString() });

        await user.click(optionButton);

        await waitFor(() => {
          expect(onPageSizeChangeSpy).toHaveBeenCalledWith(pageSize);
        });

        onPageSizeChangeSpy.mockClear();

      
    }
});