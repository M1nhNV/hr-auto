import React, { useEffect, useState } from 'react';
import {Button, Card, Descriptions, Space, Table, Tag, DescriptionsProps} from "antd";
import {CloseOutlined, RedoOutlined, SyncOutlined} from "@ant-design/icons";
import { ellipsisText} from "../../shared/util.ts";
import makeStateColor from "../../shared/MakeStateColor.tsx";

const AgentsList = () => {

  const missions =  [
    {
      "title": "TC_ID_4503_CHECK_SETTING_FROM_DAY_AFTER_FRETIREMENT_DISPOSAL_MY_NUMBER",
      "state": "processing",
      "uuid": '1'
    }
  ];

  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Env',
      span: 'filled',
      children: 'Staging',
    },
    {
      key: '2',
      label: 'Path',
      span: 'filled',
      children: '/Users/tomo/code/jinjer_hr_auto_test',
    }
  ];

  const pc = [1, 2]

  const makeColorTextState = (state: string) => {
    if (state === 'processing') {
      return 'blue'
    }

    return 'default'
  }

  return (
    <Space>
      { pc.map((item, key) =>
        <Card key={key} title={ 'PC ' + item} style={{ width: "450px"}}>
          <Space direction="vertical" size="middle">
            <Descriptions title="Settings" bordered layout="horizontal" items={items} />
            <Space>
              <Button type="primary"  icon={<SyncOutlined />}>
                Async source
              </Button>

              <Button danger icon={<CloseOutlined />}>
                End all mission
              </Button>
            </Space>
            <table className="cTable">
              <thead>
              <tr>
                <th>title</th>
                <th>state</th>
              </tr>
              </thead>
              <tbody>
              { missions.map(item => (
                <>
                  <tr key={item.uuid}>
                    <td>{ellipsisText(item.title)}</td>
                    <td>
                      <Tag color={makeColorTextState(item.state)}>
                        {item.state}
                      </Tag>
                    </td>
                  </tr>
                </>
              ))}
              </tbody>
            </table>
          </Space>
        </Card>
      )}
    </Space>
  );
};

export default AgentsList;