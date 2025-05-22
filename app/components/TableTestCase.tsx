'use client'
import React, {memo } from "react";
import {Button, Tag} from "antd";
import {RedoOutlined} from "@ant-design/icons";
import {convertColorState, convertTime} from "../../shared/util";

interface TestProps {
  uuid: string;
  title: string;
  status: string;
  type: string;
  script: string;
  state: string;
  duration: number
  skipped: boolean;
  file: string;
}


const TableTestCase = memo(({ tests, filterStatus = 'failed'} : { tests: TestProps[],  filterStatus: string }) => {
  const renderTr = (item: TestProps) => {
    return (<tr key={item.uuid}>
      <td>{item.title}</td>
      <td>
        <Tag color={convertColorState(item.state)}>
          {item.skipped ? 'skipped' : item.state}
        </Tag>
      </td>
      <td>{convertTime(item.duration)}</td>
      <td>
        {item.state === 'failed' ?
          <Button danger><RedoOutlined/> Re-run</Button>
          : ''
        }
      </td>
    </tr>)
  }

  const wrapTr = (item: TestProps) => {
    if (filterStatus === 'all' || filterStatus === item.state) {
      return renderTr(item);
    }
  }

  return (
    <table className="cTable">
      <thead>
      <tr>
        <th>title</th>
        <th>state</th>
        <th>duration</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      {tests.map((item: TestProps) => wrapTr(item))}
      </tbody>
    </table>
  );
});

export default TableTestCase;
