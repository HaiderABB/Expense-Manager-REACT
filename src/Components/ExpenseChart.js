import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export function ExpenseChart(props) {
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: 'dark2', // "light1", "dark1", "dark2"
    title: {
      text: 'Expenses Breakdown',
    },
    data: [
      {
        type: 'pie',
        indexLabel: '{label}: {y}%',
        startAngle: -90,
        dataPoints: [
          { y: 20, label: 'Automobile' },
          { y: 24, label: 'Entertainment' },
          { y: 20, label: 'Personal' },
          { y: 14, label: 'Transport' },
          { y: 12, label: 'Health Care' },
          { y: 10, label: 'Food' },
          { y: 5, label: 'Utilities' },
        ],
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options} />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
}
export default ExpenseChart;
