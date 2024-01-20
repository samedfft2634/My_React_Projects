export const drawerStyles = {
    "& .MuiListItemIcon-root, & .MuiListItemText-primary":
								{
									color: "white",  
								},
							"&:hover .MuiListItemIcon-root, &:hover .MuiListItemText-primary":
								{
									color: "red", 
								},
							"&:active .MuiListItemIcon-root, &:active .MuiListItemText-primary":
								{
									color: "#29A5F2", 
								}
}

export const btnStyles = {
	"&:hover":{color:"red",cursor:"pointer"},
}

export const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };