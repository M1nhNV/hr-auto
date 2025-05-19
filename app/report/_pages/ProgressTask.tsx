'use client'
import { Bar } from '@ant-design/plots';

// https://ant-design-charts.antgroup.com/en/examples/statistics/bar/#background
const data = [
  {
    labelName: 'Login（ログイン）',
    value: 48,
  },
  {
    labelName: 'Setting company（企業情報）',
    value: 52,
  },
  {
    labelName: ' Master setting（人事設定）',
    value: 12,
  },
  {
    labelName: 'Setting role（ロール設定）',
    value: 33,
  },
];

interface DataProps {
  originData: {
    value: number;
  }
}

const DemoBar = () => {
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
          return `${(originData.value / 100) * 100}% | ${100}`;
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
};

const ProgressTask = () => {
  return DemoBar()
}

export default ProgressTask