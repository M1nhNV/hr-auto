'use client'
import data from '../../hr_report_05-12-2025.json'
import {useEffect, useState} from "react";
import {Button, Card, Skeleton, Tag} from "antd";
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
export default function ResultTest() {
  const [suits, setSuits] = useState<string[]>([]);
  const [result, setResult] = useState([])
  const [openList, setOpenList] = useState([])
  const [loading, setLoading] = useState(true);

  const processedSuits = (suit) => {
    console.log(suit)
    if (suit.title === 'Check_detail_answer_request_for_new_spec') {
      console.log(suit);
    }
  }

  const openCollapse = (id: string) => {
    setOpenList([...openList, id]);
  }

  useEffect(() => {
    if (!data || data.length === 0) return;

    setResult(data.results[0].suites);

    data.results[0].suites.map((suite) => {
      processedSuits(suite);
    });

    const id = requestAnimationFrame(() => {
      setLoading(false);
    });

    return () => cancelAnimationFrame(id);
  }, []);

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
                  <td>{ellipsisText(item.title)}</td>
                  <td>
                    <Tag color={convertColorState(item.state)}>
                      {item.state}
                    </Tag>
                  </td>
                  <td>{convertTime(item.duration)}</td>
                  <td><Button color="primary"><RedoOutlined /></Button></td>
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
    <Card title="Result" className="p-2">
      { loading ? <Skeleton /> : renderResult() }
    </Card>
  )
}
