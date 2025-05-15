import {useEffect, useState} from "react";

import socket from "../../socket";
import {Card, Space, Button, Flex,} from "antd";


interface pcInterface {
  id: string,
  path: string,
}

interface resultInterface {
  title: string,
  content: string,
}

const Dashboard = () => {

  const [pcs, setPcs] = useState<pcInterface[]>([]);
  const [result, setResult] = useState<resultInterface[]>([]);

  const run = (pcId = '') => {
    socket.emit("run", JSON.stringify({
      id: pcId,
      script: 'node -v'
    }))
  }

  useEffect(() => {
    socket.on('connect', () => {
      console.log(`event: connect | session id: ${socket.id}`);
    });

    socket.onAny((event: string, args: string) => {
      if (event === "identity") {
        const res = JSON.parse(args);
        setPcs([
          ...pcs,
          { id: res.id, path: res.path }
        ]);
      }

      if (event === "result") {
        const res = JSON.parse(args);
        setResult([
          ...result,
          { title: res.title, content: res.content }
        ]);
      }

    });

  }, [pcs, result]);

  return (
    <div>
      <h3>List pc connected</h3>
      <hr/>
      <Space>
        {pcs.map((pc: pcInterface) => (
          <Card title={`Auto: ${pc.id} connected`} style={{ width: 300 }}>
            <p>Source path: <b>{ pc.path }</b></p>
            <Button type="primary" onClick={() => run(pc.id) }>
              Exec script
            </Button>
            <ul>
              {result.map(((result: resultInterface, key) => <li key={key}>[{result.title}]: {result.content}</li>))}
            </ul>
          </Card>
        ))}

      </Space>
    </div>
  )
}

export default Dashboard