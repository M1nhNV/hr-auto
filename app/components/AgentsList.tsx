import React, { useEffect, useState } from 'react';
import {Button, Card, Space, Table, Tag} from "antd";
import {RedoOutlined} from "@ant-design/icons";
import MakeColorOfType from "../../shared/MakeStateColor.tsx";
import {convertColorState, convertTime, ellipsisText} from "../../shared/util.ts";

const AgentsList = () => {

  const missions =  [
    {
      "title": "TC_ID_4503_CHECK_SETTING_FROM_DAY_AFTER_FRETIREMENT_DISPOSAL_MY_NUMBER",
      "fullTitle": "My_number_disposal TC_ID_4503_CHECK_SETTING_FROM_DAY_AFTER_FRETIREMENT_DISPOSAL_MY_NUMBER",
      "timedOut": null,
      "duration": 7237,
      "state": "passed",
      "speed": "slow",
      "pass": true,
      "fail": false,
      "pending": false,
      "context": "[\n  \"Fill input password by: 12345678\",\n  \"Get message alert\",\n  \"Compare: マイナンバー破棄期間を保存しました。\"\n]",
      "code": "",
      "err": {},
      "uuid": "b08b4a3b-f5d6-48f9-8114-23ff74ec3ec9",
      "parentUUID": null,
      "isHook": false,
      "skipped": false
    },
    {
      "title": "TC_ID_4504_CHECK_SHOW_RETIREMENT_EMPLOYEE",
      "fullTitle": "My_number_disposal TC_ID_4504_CHECK_SHOW_RETIREMENT_EMPLOYEE",
      "timedOut": null,
      "duration": 18344,
      "state": "failed",
      "speed": null,
      "pass": false,
      "fail": true,
      "pending": false,
      "context": "[\n  \"Fill input password by: 12345678\",\n  \"Get message alert\",\n  \"Compare: マイナンバー破棄期間を保存しました。\",\n  \"Fill input password by: 12345678\",\n  \"Check show employee ID 1484\"\n]",
      "code": "",
      "err": {
        "message": "AssertionError: expected false to be true",
        "estack": "AssertionError: expected false to be true\n    at isTrue (file:///home/hr-auto-pc-2/code/jinjer_hr_auto_test/src/core/factories/_runers/assert.js:31:17)\n    at Context.<anonymous> (file:///home/hr-auto-pc-2/code/jinjer_hr_auto_test/src/resources/test-cases/jinji-page/my-number/disposal/disposal.spec.js:138:5)\n    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)",
        "diff": "- false\n+ true\n"
      },
      "uuid": "3a311246-cd76-4cd6-b3ac-65703ee46fe9",
      "parentUUID": null,
      "isHook": false,
      "skipped": false
    },
    {
      "title": "TC_ID_4505_CHECK_SHOW_RETIREMENT_EMPLOYEE",
      "fullTitle": "My_number_disposal TC_ID_4505_CHECK_SHOW_RETIREMENT_EMPLOYEE",
      "timedOut": null,
      "duration": 18522,
      "state": "failed",
      "speed": null,
      "pass": false,
      "fail": true,
      "pending": false,
      "context": "[\n  \"Fill input password by: 12345678\",\n  \"Get message alert\",\n  \"Compare: マイナンバー破棄期間を保存しました。\",\n  \"Fill input password by: 12345678\",\n  \"Check show employee ID 1484\"\n]",
      "code": "",
      "err": {
        "message": "AssertionError: expected false to be true",
        "estack": "AssertionError: expected false to be true\n    at isTrue (file:///home/hr-auto-pc-2/code/jinjer_hr_auto_test/src/core/factories/_runers/assert.js:31:17)\n    at Context.<anonymous> (file:///home/hr-auto-pc-2/code/jinjer_hr_auto_test/src/resources/test-cases/jinji-page/my-number/disposal/disposal.spec.js:174:5)\n    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)",
        "diff": "- false\n+ true\n"
      },
      "uuid": "6f999a80-08c0-4e81-addd-ac7084a0c053",
      "parentUUID": null,
      "isHook": false,
      "skipped": false
    },
    {
      "title": "TC_ID_4506_CHECK_DONT_SHOW_RETIREMENT_EMPLOYEE",
      "fullTitle": "My_number_disposal TC_ID_4506_CHECK_DONT_SHOW_RETIREMENT_EMPLOYEE",
      "timedOut": null,
      "duration": 18367,
      "state": "passed",
      "speed": "slow",
      "pass": true,
      "fail": false,
      "pending": false,
      "context": "[\n  \"Fill input password by: 12345678\",\n  \"Get message alert\",\n  \"Compare: マイナンバー破棄期間を保存しました。\",\n  \"Fill input password by: 12345678\",\n  \"Check show employee ID 1484\"\n]",
      "code": "",
      "err": {},
      "uuid": "e432e780-13c4-4f95-ab01-86b9cc957569",
      "parentUUID": null,
      "isHook": false,
      "skipped": false
    },
    {
      "title": "TC_ID_4507_CHECK_DELETE_EMPLOYEE_RETIREMENT_EMPLOYEE_AT_DISPOSAL",
      "fullTitle": "My_number_disposal TC_ID_4507_CHECK_DELETE_EMPLOYEE_RETIREMENT_EMPLOYEE_AT_DISPOSAL",
      "timedOut": null,
      "duration": 19163,
      "state": "failed",
      "speed": null,
      "pass": false,
      "fail": true,
      "pending": false,
      "context": "[\n  \"Fill input password by: 12345678\",\n  \"Get message alert\",\n  \"Compare: マイナンバー破棄期間を保存しました。\",\n  \"Fill input password by: 12345678\"\n]",
      "code": "",
      "err": {
        "message": "NoSuchElementError: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//td[text()='1484']/following-sibling::td//img\"}\n  (Session info: chrome=135.0.7049.114)",
        "estack": "NoSuchElementError: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//td[text()='1484']/following-sibling::td//img\"}\n  (Session info: chrome=135.0.7049.114)\n    at Object.throwDecodedError (node_modules/selenium-webdriver/lib/error.js:524:15)\n    at parseHttpResponse (node_modules/selenium-webdriver/lib/http.js:601:13)\n    at Executor.execute (node_modules/selenium-webdriver/lib/http.js:529:28)\n    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at async Driver.execute (node_modules/selenium-webdriver/lib/webdriver.js:745:17)\n    at async findElementByXpath (file:///home/hr-auto-pc-2/code/jinjer_hr_auto_test/src/core/factories/_drivers/find.js:24:10)\n    at async clickElementByXpath (file:///home/hr-auto-pc-2/code/jinjer_hr_auto_test/src/core/factories/_drivers/base-actions.js:52:19)\n    at async Context.<anonymous> (file:///home/hr-auto-pc-2/code/jinjer_hr_auto_test/src/resources/test-cases/jinji-page/my-number/disposal/disposal.spec.js:245:5)",
        "diff": null
      },
      "uuid": "77483ad0-d375-48e6-92f8-aa9e77835300",
      "parentUUID": null,
      "isHook": false,
      "skipped": false
    },
    {
      "title": "TC_ID_4508_CHECK_DELETE_SUCCESS_EMPLOYEE_RETIREMENT_EMPLOYEE_AT_DISPOSAL",
      "fullTitle": "My_number_disposal TC_ID_4508_CHECK_DELETE_SUCCESS_EMPLOYEE_RETIREMENT_EMPLOYEE_AT_DISPOSAL",
      "timedOut": null,
      "duration": 18506,
      "state": "failed",
      "speed": null,
      "pass": false,
      "fail": true,
      "pending": false,
      "context": "[\n  \"Fill input password by: 12345678\",\n  \"Get message alert\",\n  \"Compare: マイナンバー破棄期間を保存しました。\",\n  \"Fill input password by: 12345678\"\n]",
      "code": "",
      "err": {
        "message": "NoSuchElementError: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//td[text()='1484']/following-sibling::td//img\"}\n  (Session info: chrome=135.0.7049.114)",
        "estack": "NoSuchElementError: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//td[text()='1484']/following-sibling::td//img\"}\n  (Session info: chrome=135.0.7049.114)\n    at Object.throwDecodedError (node_modules/selenium-webdriver/lib/error.js:524:15)\n    at parseHttpResponse (node_modules/selenium-webdriver/lib/http.js:601:13)\n    at Executor.execute (node_modules/selenium-webdriver/lib/http.js:529:28)\n    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at async Driver.execute (node_modules/selenium-webdriver/lib/webdriver.js:745:17)\n    at async findElementByXpath (file:///home/hr-auto-pc-2/code/jinjer_hr_auto_test/src/core/factories/_drivers/find.js:24:10)\n    at async clickElementByXpath (file:///home/hr-auto-pc-2/code/jinjer_hr_auto_test/src/core/factories/_drivers/base-actions.js:52:19)\n    at async Context.<anonymous> (file:///home/hr-auto-pc-2/code/jinjer_hr_auto_test/src/resources/test-cases/jinji-page/my-number/disposal/disposal.spec.js:290:5)",
        "diff": null
      },
      "uuid": "566778f7-8d92-4471-84a1-a12a1ccefed4",
      "parentUUID": null,
      "isHook": false,
      "skipped": false
    }
  ];

  return (
    <Space>
      <Card title="PC 1">
        <table className="cTable">
          <thead>
          <tr>
            <th>title</th>
            <th>state</th>
            <th>duration(s)</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          { missions.map(item => (
            <>
              <tr key={item.uuid}>
                <td>{ellipsisText(item.title)}</td>
                <td>
                  <Tag color={convertColorState(item.state)}>
                    {item.state}
                  </Tag>
                </td>
                <td>{convertTime(item.duration)}</td>
                <td><Button color="primary"><RedoOutlined /></Button></td>
              </tr>
            </>
          ))}
          </tbody>
        </table>
      </Card>
      <Card title="PC 2">
        <table className="cTable">
          <thead>
          <tr>
            <th>title</th>
            <th>state</th>
            <th>duration(s)</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          { missions.map(item => (
            <>
              <tr key={item.uuid}>
                <td>{ellipsisText(item.title)}</td>
                <td>
                  <Tag color={convertColorState(item.state)}>
                    {item.state}
                  </Tag>
                </td>
                <td>{convertTime(item.duration)}</td>
                <td><Button color="primary"><RedoOutlined /></Button></td>
              </tr>
            </>
          ))}
          </tbody>
        </table>
      </Card>
    </Space>
  );
};

export default AgentsList;