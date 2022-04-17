import dayjs from 'dayjs';
import React from 'react';
import {
    CartesianGrid,
    Line,
    LineChart,
    ReferenceLine,
    ResponsiveContainer,
    XAxis,
} from 'recharts';
import { calculateBiorythmsSeries } from '../calculations';
import './BiorythmChart.css';

/*const data = [
    { date: '2020-02-01', physical: 0.99, emotional: 0.50, intellectual: 0.25 },
    { date: '2020-02-02', physical: 0.26, emotional: 0.14, intellectual: 0.84 },
    { date: '2020-02-03', physical: 0.27, emotional: 0.96, intellectual: 0.10 },
]; */

function formatDate(isoString) {
    return dayjs(isoString).format('D MMM');
}

function BiorythmChart({ birthDate, targetDate }){
    const startDate = dayjs(targetDate).subtract(15, 'days').toISOString();
    const data = calculateBiorythmsSeries(birthDate, startDate, 31).map((item) => ({...item, date: formatDate(item.date) }));
    return (
        <ResponsiveContainer className="biorythm-chart" width="100%" height={200}>
            <LineChart data={data}>
                <XAxis dataKey="date"
                    ticks={[data[3].date, data[15].date, data[27].date]}
                />
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <ReferenceLine x={data[15].date} />
                <Line type="natural" dot={false} className="physical" dataKey="physical" stroke="green" />

                <Line type="natural" dot={false} className="emotional" dataKey="emotional" />

                <Line type="natural" dot={false} className="intellectual" dataKey="intellectual" stroke="blue" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default BiorythmChart;