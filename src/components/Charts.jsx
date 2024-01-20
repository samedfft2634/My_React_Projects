"use client";

import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import { AreaChart, Card, Title } from "@tremor/react";

import { useSelector } from "react-redux";

const valueFormatter = function (number) {
	return "$ " + new Intl.NumberFormat("us").format(number).toString();
};

const Charts = () => {
	const { sales, purchases } = useSelector((state) => state.stock);
	const salesData = sales?.map((item) => ({
		date: new Date(item.createdAt).toLocaleDateString("tr-TR"),
		sales: item.amount,
	}));
	const purchasesData = purchases?.map((item) => ({
		date: new Date(item.createdAt).toLocaleDateString("tr-TR"),
		purchases: item.amount,
	}));
	
  
	return (
		<Container>
			<Grid container spacing={2} mt={2}>
				<Grid item xs={12} lg={6}>
					<Card>
						<Title>Total Sales (USD)</Title>
						<AreaChart
							className="h-72 mt-4"
							data={salesData}
							index="date"
							yAxisWidth={65}
							categories={["sales"]}
							colors={["indigo"]}
							valueFormatter={valueFormatter}
						/>
					</Card>
				</Grid>
				<Grid item xs={12} lg={6}>
					<Card>
						<Title>Total Purchases (USD)</Title>
						<AreaChart
							className="h-72 mt-4"
							data={purchasesData}
							index="date"
							yAxisWidth={65}
							categories={["purchases"]}
							colors={["cyan"]}
							valueFormatter={valueFormatter}
						/>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};
export default Charts;
