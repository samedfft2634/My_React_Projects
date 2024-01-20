import { modalStyle } from "../styles/globalStyles";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import useStockCalls from "../service/useStockCalls";

export default function BrandModal({ open, handleClose, info, setInfo }) {
   const {postStock,putStock} = useStockCalls()
   const handleChange = (e)=>{
    const {name,value} = e.target
    setInfo({...info,[name]:value})
   }
   const handleSubmit = (e)=>{
    e.preventDefault()
    if(info._id){
        putStock("brands",info)
    } else{
        postStock("brands",info)
    }
    handleClose()
   }
	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={modalStyle}>
					<Box
						component="form"
						onSubmit={handleSubmit}
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 2,
						}}
					>
						<TextField
							label="Brand Name"
							name="name"
							id="name"
							type="text"
							variant="filled"
							value={info.name}
							onChange={handleChange}
							required
						/>
					
						<TextField
							label="Image Url"
							name="image"
							id="image"
							type="url"
							variant="filled"
							value={info.image}
							onChange={handleChange}
							required
						/>
						<Button
							type="submit"
							variant="contained"
							color={info._id ? "warning" : "success"}
							size="large"
						>
							 {info._id ? "Save  " : "Add Brand"}
						</Button>
					</Box>
				</Box>
			</Modal>
		</>
	);
}
