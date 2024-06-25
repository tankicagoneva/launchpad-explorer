const RowSelectionInfo = ({ selectedRow, totalRows }: { selectedRow: number, totalRows: number }) => {
    return (
      <div className="text-sm text-muted-foreground">
        {selectedRow} of {totalRows} rows selected
      </div>
    )
}

export default RowSelectionInfo;