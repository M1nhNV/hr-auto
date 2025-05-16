'use client'
import data from '../../hr_report_05-12-2025.json'
import {useEffect, useState} from "react";
import {Button, Card, Skeleton, Tag} from "antd";
import {ExpandAltOutlined, RedoOutlined} from "@ant-design/icons";

export default function ResultTest() {
  const [suits, setSuits] = useState<string[]>([]);
  const [result, setResult] = useState([])
  const [openList, setOpenList] = useState([])
  const [loading, setLoading] = useState(true);

  const processedSuits = (suit) => {
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
                <th>duration(s)</th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody>
              { suit.tests.map(item => (
                <>
                  <tr key={item.uuid}>
                    <td>{item.title}</td>
                    <td>
                      <Tag color="green">
                        {item.state}
                      </Tag>
                    </td>
                    <td>{item.duration}</td>
                    <td><Button color="primary"><RedoOutlined /></Button></td>
                  </tr>
                </>
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
