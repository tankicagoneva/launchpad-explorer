const RowSelectionInfo = ({ selectedRow, totalRows }: { selectedRow: number, totalRows: number }) => {
    return (
      <div data-testid={'row-selection'}  className="text-sm text-muted-foreground">
        {selectedRow} of {totalRows} rows selected
      </div>
    )
}

export default RowSelectionInfo;