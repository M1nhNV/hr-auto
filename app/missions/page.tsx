'use client'
import {useEffect, useState} from "react";
import {Card, Table, Tag, Space } from "antd";
import {CloseOutlined, RedoOutlined } from "@ant-design/icons";
import type { TableProps } from 'antd';
import { Button } from "antd";
import AgentsList from "../components/AgentsList.tsx";
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

      if (status === 'waiting') {
        color = 'default'
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
    render: (_, record) => {
      if (record.status === 'waiting') {
        return (

          <Space size="middle">
            <Button danger><CloseOutlined />Delete mission</Button>
          </Space>
        )
      }


    },
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
    status: "executed",
    type: "run",
    agent: '',
    script: "TC_ID_3978_CHECK_RESEND_AND_BULKRESEND_REQUEST",
  },
  {
    uuid: '9dc6c368-70a8-4a79-a7ef-adf7154902b2',
    title: "Setting_SSO_service ",
    status: "waiting",
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
      <AgentsList />
      <Card title="Missions" className="p-2">
        <Table<MissionProps> columns={columns} dataSource={data} />
      </Card>
    </Space>
  )
}
