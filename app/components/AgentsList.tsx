import React, { useEffect, useState } from 'react';
import {Button, Card, Space, Table, Tag} from "antd";
import {RedoOutlined} from "@ant-design/icons";
import { ellipsisText} from "../../shared/util.ts";

const AgentsList = () => {

  const missions =  [
    {
      "title": "TC_ID_4503_CHECK_SETTING_FROM_DAY_AFTER_FRETIREMENT_DISPOSAL_MY_NUMBER",
      "state": "progress",
      "uuid": '1'
    },
    {
      "title": "TC_ID_4504_CHECK_SHOW_RETIREMENT_EMPLOYEE",
      "state": "execute",
      "uuid": '2'
    },
    {
      "title": "TC_ID_4505_CHECK_SHOW_RETIREMENT_EMPLOYEE",
      "state": "execute",
      "uuid": '3'
    },
    {
      "title": "TC_ID_4506_CHECK_DONT_SHOW_RETIREMENT_EMPLOYEE",
      "state": "execute",
      "uuid": '4'
    },
    {
      "title": "TC_ID_4507_CHECK_DELETE_EMPLOYEE_RETIREMENT_EMPLOYEE_AT_DISPOSAL",
      "state": "execute",
      "uuid": '5'
    },
    {
      "title": "TC_ID_4508_CHECK_DELETE_SUCCESS_EMPLOYEE_RETIREMENT_EMPLOYEE_AT_DISPOSAL",
      "state": "execute",
      "uuid": '6'
    }
  ];
  const pc = [1, 2, 3, 4]
  return (
    <Space>
      { pc.map((item) =>
        <Card title={ 'PC ' + item}>
          <table className="cTable">
            <thead>
            <tr>
              <th>title</th>
              <th>state</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            { missions.map(item => (
              <>
                <tr key={item.uuid}>
                  <td>{ellipsisText(item.title)}</td>
                  <td>
                    {item.state}
                  </td>
                  <td><Button color="primary"><RedoOutlined /></Button></td>
                </tr>
              </>
            ))}
            </tbody>
          </table>
        </Card>
      )}
    </Space>
  );
};

export default AgentsList;