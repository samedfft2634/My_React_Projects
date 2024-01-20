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



export default function FirmCard({ firm,handleOpen,setInfo }) {
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
          {firm?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {firm?.address}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt={firm?.name}
        image={firm?.image}
        sx={{ objectFit: "contain",height:"140px" }}
      />

      <Typography variant="body2" color="text.secondary">
        {firm?.phone}
      </Typography>

      <CardActions>
        <EditIcon  sx={btnStyles} onClick={()=>{
          handleOpen()
          setInfo(firm)
        }} />
        <DeleteOutlineIcon  sx={btnStyles} onClick={()=> deleteStock("firms",firm?._id)} />
      </CardActions>
    </Card>
  )
}
