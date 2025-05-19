import {Card, Col, Row, Space} from "antd";
import ProgressTask from "./_pages/ProgressTask.tsx";
import TotalTask from "./_pages/TotalTask.tsx";
import ProgressDetailOfFeature from "./_pages/ProgressDetailOfFeature.tsx";

const Report = () => {

  return <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
    <Row gutter={16}>
      <Col span={12}>
      <Card title="Process project">
        <ProgressTask />
      </Card>
      </Col>

      <Col span={12}>
        <Card title="Total task">
          <TotalTask />
        </Card>
      </Col>
    </Row>

    <Row gutter={16}>
      <Col span={12}>
        <Card title="Process Task: 1. Setting company（企業情報）">
          <ProgressDetailOfFeature />
        </Card>
      </Col>
    </Row>
  </Space>
}

export default Report;