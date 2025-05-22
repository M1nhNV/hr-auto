'use client'
import data from '../../hr_report_05-12-2025.json'
import React, {useEffect, useState} from "react";
import {
  Button,
  Card,
  Checkbox,
  Col,
  Descriptions,
  Row,
  Skeleton,
  Space,
  Tag,
  Typography,
  DescriptionsProps,
  Table, Flex,
  Radio,
} from "antd";
import {ExpandAltOutlined, RedoOutlined} from "@ant-design/icons";
import makeColorOfType from "../../shared/MakeStateColor.tsx";
import MakeStatusColor from "../../shared/MakeStateColor.tsx";
import {convertColorState, convertTime, ellipsisText} from "../../shared/util.ts";
import SuitDetail from "./SuitDetail.tsx";
import {SuitProps} from "../../shared/suit";
import TableTestCase from "./TableTestCase.tsx";

interface TestProps {
  uuid: string;
  title: string;
  status: string;
  type:  string;
  script: string;
  state: string;
  duration: number
  skipped: boolean;
  file: string;
}

const { Text } = Typography;

const summaryInfo: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Browser name',
    span: 'filled',
    children: 'Chrome',
  },
  {
    key: '2',
    label: 'Env',
    span: 'filled',
    children: 'Staging',
  },
  {
    key: '3',
    label: 'Browser version',
    span: 'filled',
    children: '136',
  },
  {
    key: '4',
    label: 'Start time',
    span: 'filled',
    children: '2025/05/20 08:35:48',
  },
  {
    key: '5',
    label: 'End time',
    span: 'filled',
    children: '2025/05/20 13:12:10',
  },
  {
    key: '6',
    label: 'Total time',
    span: 'filled',
    children: '58m 24.2s',
  },
  {
    key: '7',
    label: 'Total case',
    span: 'filled',
    children: '5400',
  },
  {
    key: '8',
    label: 'Total passed',
    span: 'filled',
    children: '5400',
  },
  {
    key: '9',
    label: 'Total failed',
    span: 'filled',
    children: '100',
  },
  {
    key: '10',
    label: 'Skipped',
    span: 'filled',
    children: '200',
  },
];

export default function ResultTest() {
  const [result, setResult] = useState([])
  const [openList, setOpenList] = useState<string[]>([])
  const [closeList, setCloseList] = useState<string[]>([])
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('all');

  const closeCollapse = (id: string) => {
    setCloseList([...closeList, id])
  }

  useEffect(() => {
    if (!data || data.length === 0) return;

    console.log("data", data);
    setResult(data.results[0].suites);


    const id = requestAnimationFrame(() => {
      setLoading(false);
    });

    return () => cancelAnimationFrame(id);
  }, []);

  const onChange = (value: string) => {
    setFilterStatus(value);
  }

  const hiddenOrNot = (suit: SuitProps) => {
    if (filterStatus === 'failed' && suit.failures.length === 0) {
      return 'hidden'
    }

    if (filterStatus === 'passed' && suit.passes.length === 0) {
      return 'hidden'
    }

    if (filterStatus === 'skipped' && suit.skipped.length === 0) {
      return 'hidden'
    }

    if (filterStatus === 'pending' && suit.pending.length === 0) {
      return 'hidden'
    }

    return 'block'
  }
  const renderResult = () => {
    return <>
      { result.map((suit: SuitProps) => (
        <div key={suit.uuid} className={ 'border p-2 m-2 ' + hiddenOrNot(suit) }>
          <h3 >
            <b>{ suit.title }</b>
            <Button onClick={() => closeCollapse(suit.uuid)} icon={<ExpandAltOutlined />} />
          </h3>
          <i>{suit.file}</i>
          <div style={{ padding: '10px' }} className={!closeList.includes(suit.uuid) ? "block" : 'hidden'}>
            { suit.suites.map((suit: SuitProps ) => (
              <SuitDetail key={suit.uuid} filterStatus={filterStatus} suit={suit} />
            ))}

            { suit.tests.length === 0 ? '' :
              <TableTestCase tests={suit.tests} filterStatus={filterStatus} />
            }
          </div>
        </div>
      ))}
    </>
  }

  return (
    <Space direction="vertical" size={24} style={{ display: 'flex' }}>
      <Card title="Actions filte">
        <Radio.Group style={{ width: '100%'}} value={filterStatus} onChange={(e) => onChange(e.target.value)}>
          <Row>
            <Col span={4}>
              <Radio value="all"><Text type="secondary">Show all</Text></Radio>
            </Col>
            <Col span={4}>
              <Radio value="passed"><Text type="success">Show Passed</Text></Radio>
            </Col>
            <Col span={4}>
              <Radio value="failed"><Text type="danger">Show failed</Text></Radio>
            </Col>
            <Col span={4}>
              <Radio value="bug"><Text type="warning">Show bug</Text></Radio>
            </Col>
            <Col span={4}>
              <Radio value="skipped"><Text>Show skipped</Text></Radio>
            </Col>
          </Row>
        </Radio.Group>
      </Card>
      <Card title="Result" className="p-2">
        { loading ? <Skeleton /> : renderResult() }
      </Card>
    </Space>
  )
}
