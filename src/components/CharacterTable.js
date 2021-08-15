import React from "react";
import { Table, Typography } from "antd";
export const CharacterTable = ({ characters }) => {
  const { Title } = Typography;
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <Title level={5}>{text}</Title>,
    },
    {
      title: "Height (cm)",
      dataIndex: "height",
      key: "height",
    },
    {
      title: "Mass (kg)",
      dataIndex: "mass",
      key: "mass",
    },
    {
      title: "Hair color",
      dataIndex: "hair_color",
      key: "hair_color",
    },
    {
      title: "Eye Color",
      dataIndex: "eye_color",
      key: "eye_color",
    },
    {
      title: "Birth year",
      dataIndex: "birth_year",
      key: "birth_year",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
  ];

  return <Table dataSource={characters} columns={columns} />;
};
