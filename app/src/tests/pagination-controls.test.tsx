import "@testing-library/jest-dom"
import { test, expect, vi } from "vitest"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import PaginationControls from "@/components/pagination-controls"


const onFirstPageSpy = vi.fn(); 
const onPreviousPageSpy = vi.fn();
const onNextPageSpy = vi.fn();
const onLastPageSpy = vi.fn();



const exampleProps = {
    currentPage: 2,
    totalPages: 10,
    onFirstPage: onFirstPageSpy,
    onPreviousPage: onPreviousPageSpy,
    onNextPage: onNextPageSpy,
    onLastPage: onLastPageSpy,
    canPreviousPage: true,
    canNextPage: true
  }

  const renderPaginationControls = (props = {}) => {
    return render(<PaginationControls {...exampleProps} {...props} />);
  };


  
test("renders pagination", async ()  => {

   renderPaginationControls();
  const paginationElement = await screen.findByTestId('pagination');
  
  expect(paginationElement).toBeInTheDocument();
  
})



test('the page number is displayed correctly', async () => {
   
    renderPaginationControls({ currentPage: 2, totalPages: 10 })

    const paginationElement = await screen.findByTestId('pagination');

    expect(paginationElement).toHaveTextContent( `Page ${exampleProps.currentPage} of ${exampleProps.totalPages}`)

  }
)



test('handles first page correctly', () => {

    renderPaginationControls({ currentPage: 1, canPreviousPage: false });

    expect(screen.getByRole('button', { name: /first/i })).toBeDisabled();
    expect(screen.getByRole('button', { name: /previous/i })).toBeDisabled();
    expect(screen.getByRole('button', { name: /next/i })).toBeEnabled();
    expect(screen.getByRole('button', { name: /last/i })).toBeEnabled();

  });



  test('handles last page correctly', () => {

    renderPaginationControls({ currentPage: 10, totalPages: 10, canNextPage: false });

    expect(screen.getByRole('button', { name: /first/i })).toBeEnabled();
    expect(screen.getByRole('button', { name: /previous/i })).toBeEnabled();
    expect(screen.getByRole('button', { name: /next/i })).toBeDisabled();
    expect(screen.getByRole('button', { name: /last/i })).toBeDisabled();

  });



  test('disables buttons correctly', () => {

    renderPaginationControls({ canPreviousPage: false, canNextPage: false });
    
    expect(screen.getByRole('button', { name: /first/i })).toBeDisabled();
    expect(screen.getByRole('button', { name: /previous/i })).toBeDisabled();
    expect(screen.getByRole('button', { name: /next/i })).toBeDisabled();
    expect(screen.getByRole('button', { name: /last/i })).toBeDisabled();
  });



  test('handles functions correctly', async () => {

    renderPaginationControls({ onFirstPage: onFirstPageSpy, onPreviousPage: onPreviousPageSpy, onNextPage: onNextPageSpy, onLastPage: onLastPageSpy });

    fireEvent.click(screen.getByRole('button', { name: /first/i }));
    await waitFor(() => {
      expect(exampleProps.onFirstPage).toHaveBeenCalledTimes(1); 
    });

    fireEvent.click(screen.getByRole('button', { name: /previous/i }));
    await waitFor(() => {
      expect(exampleProps.onFirstPage).toHaveBeenCalledTimes(1); 
    });

    fireEvent.click(screen.getByRole('button', { name: /next/i }));
    await waitFor(() => {
      expect(exampleProps.onFirstPage).toHaveBeenCalledTimes(1); 
    });

    fireEvent.click(screen.getByRole('button', { name: /last/i }));
    await waitFor(() => {
      expect(exampleProps.onFirstPage).toHaveBeenCalledTimes(1); 
    });
  });

