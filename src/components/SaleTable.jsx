import React from "react"
import useStockCalls from "../service/useStockCalls"
import { useSelector } from "react-redux"
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { btnStyles } from "../styles/globalStyles"
import Box from "@mui/material/Box"

const SaleTable = ({ handleOpen, setInfo }) => {
    const { deleteStock } = useStockCalls()
    const { sales } = useSelector((state) => state.stock)
    const getRowId = (row) => row._id
    const columns = [
        {
          field: "createdAt",
          headerName: "Date",
          minWidth: 150,
          headerAlign: "center",
          align: "center",
          renderCell: ({ row }) => new Date(row.createdAt).toLocaleString("tr-TR"),
        },
    
        {
          field: "brandId",
          headerName: "Brand",
          flex: 1,
          minWidth: 100,
          headerAlign: "center",
          align: "center",
          renderCell: ({ row }) => row?.brandId?.name,
        },
        {
          field: "productId",
          headerName: "Product",
          flex: 1,
          minWidth: 100,
          headerAlign: "center",
          align: "center",
          renderCell: ({ row }) => row?.productId?.name,
        },
        {
          field: "quantity",
          headerName: "Quantity",
          minWidth: 50,
          headerAlign: "center",
          align: "center",
        },
        {
          field: "price",
          headerName: "Price",
          minWidth: 50,
          headerAlign: "center",
          align: "center",
        },
        {
          field: "amount",
          headerName: "Amount",
          minWidth: 50,
          headerAlign: "center",
          align: "center",
        },
        {
          field: "actions",
          headerName: "Actions",
          minWidth: 40,
          headerAlign: "center",
          align: "center",
          renderCell: ({ row: { brandId, price, quantity, productId, _id } }) => {
            return [
              <GridActionsCellItem
                key="edit"
                icon={<EditIcon />}
                label="Edit"
                onClick={() => {
                  handleOpen()
                  setInfo({ brandId, price, quantity, productId, _id })
                }}
                sx={btnStyles}
              />,
              <GridActionsCellItem
                key="delete"
                icon={<DeleteIcon />}
                label="Delete"
                onClick={() => deleteStock("sales", _id)}
                sx={btnStyles}
              />,
            ]
          },
        },
      ]
  return (
    <Box sx={{ width: "100%", mt: 4 }}>
    <DataGrid
      autoHeight
      rows={sales}
      columns={columns}
      pageSizeOptions={[20, 50, 75, 100]} 
      disableRowSelectionOnClick
      slots={{ toolbar: GridToolbar }}
      getRowId={getRowId}
    />
  </Box>
  )
}

export default SaleTable