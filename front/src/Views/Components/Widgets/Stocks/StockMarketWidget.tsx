import * as React from 'react';
import Widget from '../../Widget';
import AvailableServices from '../../../../Models/Service';
import Button from '@mui/material/Button/Button';
import Grid from '@mui/material/Grid/Grid';

interface StockMarketWidgetInterface {
	shortName: string,
	total: number,
	variation: number
}

const StockMarketWidget = (props: StockMarketWidgetInterface) => {

	return <Widget service={AvailableServices['stocks']}>
		<Grid item>
			<Grid container alignItems="center" justifyContent="space-between" style={{ padding: 10 }}>
				<h2>{props.shortName}</h2>
			</Grid>
		</Grid>
		<Grid item >
			<Grid container direction="column" alignItems="end">
				<Grid item justifyContent="center" style={{ padding: 3 }}>
					<span> {props.total}</span>
				</Grid>
				<Grid item style={{ padding: 3 }}>
					<Button size="small" variant="contained" color={props.variation >= 0 ? 'success' : 'error'} disableElevation>
						{props.variation >= 0 ? "+" : ""}{props.variation}
					</Button>
				</Grid>
			</Grid>
		</Grid>
	</Widget>
}

export { StockMarketWidget, StockMarketWidgetInterface }