'use client'
import { Pie } from '@ant-design/plots';
import React from 'react';

// https://ant-design-charts.antgroup.com/en/examples/statistics/pie/#basic
const TotalTask = () => {
  const config = {
    data: [
      { type: 'Login（ログイン）', value: 27 },
      { type: 'Setting company（企業情報）', value: 25 },
      { type: 'Master setting（人事設定）', value: 18 },
      { type: 'Setting role（ロール設定）', value: 15 },
      { type: 'Template mail（メールテンプレート）', value: 10 },
      { type: 'Customize（カスタム項目）', value: 5 },
    ],
    angleField: 'value',
    colorField: 'type',
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
  };
  return <Pie {...config} />;
};

export default TotalTask