import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import EditIcon from "@mui/icons-material/Edit"
import useStockCalls from "../service/useStockCalls"
import { btnStyles } from "../styles/globalStyles"



export default function BrandCard({ brand,handleOpen,setInfo }) {
    const {deleteStock} = useStockCalls()
  
  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "300px",
        height: "400px",
        p: 2,
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {brand?.name}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt={brand?.name}
        height="140"
        image={brand?.image}
        sx={{ objectFit: "contain" }}
      />
      <CardActions>
        <EditIcon  sx={btnStyles} onClick={()=>{
          handleOpen()
          setInfo(brand)
        }} />
        <DeleteOutlineIcon  sx={btnStyles} onClick={()=> deleteStock("firms",brand?._id)} />
      </CardActions>
    </Card>
  )
}
