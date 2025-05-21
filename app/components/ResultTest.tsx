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
  Table
} from "antd";
import {ExpandAltOutlined, RedoOutlined} from "@ant-design/icons";
import makeColorOfType from "../../shared/MakeStateColor.tsx";
import MakeStatusColor from "../../shared/MakeStateColor.tsx";
import {convertColorState, convertTime, ellipsisText} from "../../shared/util.ts";

interface TestProps {
  uuid: string;
  title: string;
  status: string;
  type:  string;
  script: string;
  state: string;
  duration: number
}

const { Text } = Typography;

const summaryInfo: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Env',
    span: 'filled',
    children: 'Staging',
  },
  {
    key: '2',
    label: 'Total time',
    span: 'filled',
    children: '58m 24.2s',
  },
  {
    key: '2',
    label: 'Total case',
    span: 'filled',
    children: '5400',
  },
  {
    key: '2',
    label: 'Total case',
    span: 'filled',
    children: '5400',
  },
  {
    key: '2',
    label: 'Passed',
    span: 'filled',
    children: '5400',
  },
  {
    key: '2',
    label: 'Failed',
    span: 'filled',
    children: '100',
  },
  {
    key: '2',
    label: 'Skipped',
    span: 'filled',
    children: '200',
  },
];

export default function ResultTest() {
  const [suits, setSuits] = useState<string[]>([]);
  const [summaryInfo, setSummaryInfo] = useState<DescriptionsProps['items']>([]);
  const [result, setResult] = useState([])
  const [openList, setOpenList] = useState([])
  const [loading, setLoading] = useState(true);

  const processedSuits = (suit) => {

  }

  const openCollapse = (id: string) => {
    setOpenList([...openList, id]);
  }

  useEffect(() => {
    if (!data || data.length === 0) return;

    console.log("data", data);
    setResult(data.results[0].suites);

    data.results[0].suites.map((suite) => {
      processedSuits(suite);
    });

    const id = requestAnimationFrame(() => {
      setLoading(false);
    });

    return () => cancelAnimationFrame(id);
  }, []);

  const onChange = () => {

  }

  const renderResult = () => {
    return <>
      { result.map(suit => (
        <div key={suit.uuid} className="border p-2 m-2">
          <h3 >
            <b>{ suit.title }</b>
            <Button onClick={() => openCollapse(suit.uuid)} icon={<ExpandAltOutlined />} />
            <br />
            <i>{suit.file}</i>
          </h3>
          <div style={{ padding: '10px' }} className={openList.includes(suit.uuid) ? "block" : 'hidden'}>
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
              { suit.tests.map((item : TestProps) => (
                <tr key={item.uuid}>
                  <td>{item.title}</td>
                  <td>
                    <Tag color={convertColorState(item.state)}>
                      {item.state}
                    </Tag>
                  </td>
                  <td>{convertTime(item.duration)}</td>
                  <td>
                    { item.state === 'failed' ?
                    <Button color="primary"><RedoOutlined /> Re-run</Button>
                      : ''
                    }
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </>
  }

  return (
    <Space direction="vertical" size={24} style={{ display: 'flex' }}>
      <Card title="Actions filte">
        <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
          <Row>
            <Col span={2}>
              <Checkbox value="passed"><Text type="success">Show Passed</Text></Checkbox>
            </Col>
            <Col span={2}>
              <Checkbox value="failed"><Text type="danger">Show failed</Text></Checkbox>
            </Col>
            <Col span={2}>
              <Checkbox value="bug"><Text type="warning">Show bug</Text></Checkbox>
            </Col>
            <Col span={2}>
              <Checkbox value="skipped"><Text>Show skipped</Text></Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </Card>
      <Card title="Summary">
        <p>Total: 5400</p>
      </Card>
    <Card title="Result" className="p-2">
      { loading ? <Skeleton /> : renderResult() }
    </Card>
    </Space>
  )
}
