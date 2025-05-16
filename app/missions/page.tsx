'use client'
import {useEffect, useState} from "react";
import {Card, Table, Tag, Space } from "antd";
import {CloseOutlined, RedoOutlined, SearchOutlined} from "@ant-design/icons";
import type { TableProps } from 'antd';
import { Button } from "antd";
interface MissionProps {
  uuid: string;
  title: string;
  status: string;
  type:  string;
  script: string;
  agent: string;
}

const columns: TableProps<MissionProps>['columns'] = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Scripts',
    dataIndex: 'script',
    key: 'script',
  },
  {
    title: 'Agent',
    dataIndex: 'agent',
    key: 'agent',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (_, { status }) => {
      let color = 'green';

      if (status === 'processing') {
        color = 'blue'
      }

      if (status === 'failed') {
        color = 'red'
      }

      return (
        <Tag color={color}>
          {status.toUpperCase()}
        </Tag>
      )
    }
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button color="primary"><RedoOutlined /></Button>
        <Button color="danger"><CloseOutlined /></Button>
      </Space>
    ),
  },
];

const data: MissionProps[] = [
  {
    uuid: '9dc6c368-70a8-4a79-a7ef-adf7154909b2',
    title: "Setting_SSO_service ",
    status: "failed",
    type: "run",
    agent: '',
    script: "TC_ID_3968_CHECK_AUTO_FILL_POSTAL_CODE_INVALID_INFO_WHEN_EDIT_DOCUMENT_CURRENT_YEAR",
  },
  {
    uuid: '9dc6c368-70a8-4a79-a7ef-adf7154909b2',
    title: "Setting_SSO_service ",
    status: "processing",
    type: "run",
    agent: '',
    script: "TC_ID_3977_CHECK_REASON_NOTE_APPLY",
  },
  {
    uuid: '9dc6c368-70a8-4a79-a7ef-adf7154909b2',
    title: "Setting_SSO_service ",
    status: "succeed",
    type: "run",
    agent: '',
    script: "TC_ID_3978_CHECK_RESEND_AND_BULKRESEND_REQUEST",
  }
];

export default function ResultTest() {
  const [missions, setMissions] = useState([]);

  const actionMission = (id: string) => {

  }

  const loadMission = () => {
    // fetch from api
    //setMissions(data);
  }

  useEffect(() => {
    loadMission()
  }, [missions]);

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Card title="Agents">

      </Card>
      <Card title="Missions" className="p-2">
        <Table<MissionProps> columns={columns} dataSource={data} />
      </Card>
    </Space>
  )
}
