'use client'
import { Bar } from '@ant-design/plots';
import React from 'react';

// https://ant-design-charts.antgroup.com/en/examples/statistics/bar/#bar

const data = [
  {
    labelName: 'Setting company',
    value: 48,
  },
  {
    labelName: 'Setting bank account',
    value: 52,
  },
  {
    labelName: 'Setting gencode employee',
    value: 100,
  },
  {
    labelName: 'Company suppliers',
    value: 32,
  },
  {
    labelName: 'Limit IP-access',
    value: 32,
  },
  {
    labelName: 'Password policy',
    value: 13,
  },
  {
    labelName: 'Device ID',
    value: 6,
  },
];

interface DataProps {
  originData: {
    value: number;
  }
}
const ProgressDetailOfFeature = () => {

  const config = {
    data,
    xField: 'labelName',
    yField: 'value',
    paddingRight: 80,
    style: {
      maxWidth: 25,
    },
    markBackground: {
      label: {
        text: ({ originData } : DataProps) => {
          return `${originData.value} | 100`;
        },
        position: 'right',
        dx: 80,
        style: {
          fill: '#aaa',
          fillOpacity: 1,
          fontSize: 14,
        },
      },
      style: {
        fill: '#eee',
      },
    },
    scale: {
      y: {
        domain: [0, 100],
      },
    },
    axis: {
      x: {
        tick: false,
        title: false,
      },
      y: {
        grid: false,
        tick: false,
        label: false,
        title: false,
      },
    },
    interaction: {
      elementHighlight: false,
    },
  };

  return <Bar {...config} />;
}

export default ProgressDetailOfFeature;