'use client'
import {Tag} from "antd";
import {useEffect, useState} from "react";

const MakeColorOfType = (state: string) => {
  const [color, setColor] = useState('green');

  useEffect(() => {
    if (state === 'failed') {
      setColor('red');
    }

    if (state === 'retry') {
      setColor('default');
    }

  }, [state]);

  return (
  <Tag color={color}>
    {state}
  </Tag>
  )
}

export default MakeColorOfType;