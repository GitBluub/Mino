import * as React from 'react';
import Card from '@mui/material/Card/Card';
import Grid from '@mui/material/Grid/Grid';

const WidgetCard = (props: any) => {
	let borderRadius = 8;
	let bcolor = "";
	let tcolor = "";
	if (typeof props.borderRadius != 'undefined')
		borderRadius= props.borderRadius
	if (typeof props.backgroundColor != 'undefined')
		bcolor= props.backgroundColor
	if (typeof props.fontColor != 'undefined')
		tcolor= props.fontColor
	return <Card style={{ borderRadius: borderRadius, backgroundColor: bcolor , color: tcolor, width: "80%"}} variant="outlined" sx={{display: 'flex',flexDirection: 'column',alignItems: 'center', boxShadow: 20}}>
	{props.children}
	</Card>
}


export default function Widget(props: any)  {
		let service = props.service;
		return <WidgetCard borderRadius={30} backgroundColor={service.backgroundColor} fontColor={service.fontColor}>
			<Grid container direction="row" justifyContent="space-between" alignItems="flex-start" sx={{marginLeft: 8, paddingRight: 8}}>
				<h1>{service.name}</h1>
				<h1>{props.children}</h1>
			</Grid>
		</WidgetCard>
}