import { modalStyle } from "../styles/globalStyles";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import useStockCalls from "../service/useStockCalls";

export default function FirmModal({ open, handleClose, info, setInfo }) {
   const {postStock,putStock} = useStockCalls()
   const handleChange = (e)=>{
    const {name,value} = e.target
    setInfo({...info,[name]:value})
   }
   const handleSubmit = (e)=>{
    e.preventDefault()
    if(info._id){
        putStock("firms",info)
    } else{
        postStock("firms",info)
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
							label="Firm Name"
							name="name"
							id="name"
							type="text"
							variant="filled"
							value={info.name}
							onChange={handleChange}
							required
						/>
						<TextField
							label="Phone"
							name="phone"
							id="phone"
							type="tel"
							variant="filled"
							value={info.phone}
							onChange={handleChange}
							required
						/>
						<TextField
							label="Address"
							name="address"
							id="address"
							type="address"
							variant="filled"
							value={info.address}
							onChange={handleChange}
							required
						/>
						<TextField
							label="Image"
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
							 {info._id ? "Save " : "Submit"}
						</Button>
					</Box>
				</Box>
			</Modal>
		</>
	);
}
