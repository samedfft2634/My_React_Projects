import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import { amber, cyan, lightGreen } from "@mui/material/colors";
import { Avatar, Box, Paper, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";


const KPI = () => {
    const {sales,purchases} = useSelector(state=>state.stock)
    const sumSales = sales?.reduce((acc,item)=>acc + item.amount ,0)
    const sumPurchases = purchases?.reduce((acc,item)=>acc + item.amount ,0)
    const kpiData = [
        {
            id: 1,
            icon: <AttachMoneyIcon sx={{ fontSize: "3rem" }} />,
            title: "Sales",
            price: sumSales,
            bgColor: cyan[100],
            color: cyan[600],
        },
        {
            id: 2,
            icon: <PaymentsIcon sx={{ fontSize: "3rem" }} />,
            title: "Profit",
            price: `${sumSales - sumPurchases} `,
            bgColor: "#ccff90",
            color: lightGreen[700],
        },
        {
            id: 3,
            icon: <AddShoppingCartIcon sx={{ fontSize: "3rem" }} />,
            title: "Purchases",
            price: sumPurchases,
            bgColor: amber[100],
            color: amber[600],
        },
    ];
    // console.log(sales);
	return (
		<Stack
			justifyContent="center"
			alignItems="center"
			flexWrap="wrap"
			direction="row"
			gap={2}
			sx={{mb:5}}
		>
			{kpiData.map((item) => (
				<Paper
					key={item.id}
					elevation={10}
					sx={{
						display: "flex",
						p: 2,
						gap: 3,
						width: "250px",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Avatar
						sx={{
							bgcolor: item.bgColor,
							color: item.color,
							width: "90px",
							height: "90px",
						}}
					>
						{item.icon}
					</Avatar>
					<Box>
						<Typography variant="button">{item.title}</Typography>
						<Typography variant="h5">${item.price}</Typography>
					</Box>
				</Paper>
			))}
		</Stack>
	);
};

export default KPI;
