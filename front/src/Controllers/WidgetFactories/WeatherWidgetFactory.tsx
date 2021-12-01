import React, { useEffect, useState } from 'react';
import { TemperatureWidget } from '../../Views/Components/Widgets/Weather/TemperatureWidget';
import { WeatherWidget } from '../../Views/Components/Widgets/Weather/WeatherWidget';
import ErrorWidget from '../../Views/Components/Widgets/ErrorWidget';
import type { ServiceWidgetFactoryProps } from '../WidgetFactory';
import { HumidityWidget } from '../../Views/Components/Widgets/Weather/HumidityWidget';

interface WeatherWidgetData {
	city: string,
	temperature?: number,
	illustrationURL?: string,
	humidity?: number,
	condition?: string,
}

const WeatherWidgetFactory = ({ widgetName, widgetParams, widgetData }: ServiceWidgetFactoryProps) => {
	const data = widgetData as WeatherWidgetData;
	console.log(data)
	switch (widgetName) {
		case "temperature":
			return (<TemperatureWidget city={data.city} temperature={data.temperature as number} />)
		case "weather":
			return (<WeatherWidget city={data.city} illustrationUrl={data.illustrationURL as string} condition={data.condition as string} />)
		case "humidity":
			return (<HumidityWidget city={data.city} humidity={data.humidity as number} />)
	}
	return <ErrorWidget widgetName={widgetName} serviceName="Weather" widgetParams={widgetParams}/>
}

export default WeatherWidgetFactory;
export { WeatherWidgetData }