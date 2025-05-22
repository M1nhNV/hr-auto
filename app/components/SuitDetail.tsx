import {Button} from "antd";
import {ExpandAltOutlined} from "@ant-design/icons";
import React, {useEffect, useState} from "react";
import {SuitProps} from "../../shared/suit";
import TableTestCase from "./TableTestCase.tsx";

const SuitDetail = ({ suit, filterStatus = 'all' } : { suit : SuitProps, filterStatus: string}) => {
  const [openListSuit, setOpenListSuit] = useState<string[]>([]);

  const openCollapse = (id: string) => {
    setOpenListSuit([...openListSuit, id]);
  }

  return (
    <div key={suit.uuid} className="border p-2 m-2">
      { suit.title }
      <Button onClick={() => openCollapse(suit.uuid)} icon={<ExpandAltOutlined />} />
      <br />
      <i>{suit.file}</i>
      <TableTestCase tests={suit.tests} filterStatus={filterStatus} />
    </div>
  )
}

export default SuitDetail;