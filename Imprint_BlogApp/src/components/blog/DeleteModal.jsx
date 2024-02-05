import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import React, { cloneElement, forwardRef, useState } from "react";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { CardMedia } from "@mui/material";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useNavigate } from "react-router-dom";

const Fade = forwardRef(function Fade(props, ref) {
	const {
		children,
		in: open,
		onClick,
		onEnter,
		onExited,
		ownerState,
		...other
	} = props;
	const style = useSpring({
		from: { opacity: 0 },
		to: { opacity: open ? 1 : 0 },
		onStart: () => {
			if (open && onEnter) {
				onEnter(null, true);
			}
		},
		onRest: () => {
			if (!open && onExited) {
				onExited(null, true);
			}
		},
	});

	return (
		<animated.div ref={ref} style={style} {...other}>
			{cloneElement(children, { onClick })}
		</animated.div>
	);
});

Fade.propTypes = {
	children: PropTypes.element.isRequired,
	in: PropTypes.bool,
	onClick: PropTypes.any,
	onEnter: PropTypes.func,
	onExited: PropTypes.func,
	ownerState: PropTypes.any,
};

export const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
  borderRadius:"10px",
	boxShadow: 24,
	p: 4,
};

const DeleteModal = ({open,handleClose,image,id}) => {
  const {deleteBlog} = useBlogCalls()
  const navigate = useNavigate()
  const handleDelete = () =>{
    deleteBlog(id)
    navigate("/my-blogs")
  }
	return (
		<div>
			<Modal
				aria-labelledby="spring-modal-title"
				aria-describedby="spring-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						TransitionComponent: Fade,
					},
				}}
			>
				<Fade in={open}>
					<Box sx={style}>
          <CardMedia
							component="img"
							src={image}
							loading="lazy"
							alt="blogImage"
							sx={{ width: "100%" }}
						/>
						<Typography
							id="spring-modal-title"
							variant="h6"
							component="h2"
              sx={{textAlign:"center"}}
						>
							Do you really want to delete your blog? This process
							cannot be undone!
						</Typography>
						<Box
							sx={{
                m:"auto",
                mt:2,
								display: "flex",
								gap: 2,
								flexDirection: "row",
                justifyContent:'center'
							}}
						>
							<Button
								onClick={handleClose}
								variant="outlined"
                color="error"
								startIcon={<ThumbDownOffAltIcon />}
							>
								I've given up
							</Button>
							<Button variant="contained" color="success" endIcon={<ThumbUpOffAltIcon />} onClick={handleDelete}>
								I'm Sure
							</Button>
						</Box>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};
export default DeleteModal;
