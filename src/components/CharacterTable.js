import React from "react";
import { Table, Typography, Pagination } from "antd";
import { fetchPeople } from "../redux/actions/peopleAction";
import { useDispatch } from "react-redux";

export const CharacterTable = ({ characters, total }) => {
  const { Title } = Typography;
  const dispatch = useDispatch();
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      fixed: "left",
      key: "name",
      width: "10em",
      render: (text) => <Title level={5}>{text}</Title>,
    },
    {
      title: "Birth year",
      dataIndex: "birth_year",
      key: "birth_year",
      render: (text) => (
        <div>{text === "unknown" || text === "none" ? "-" : text}</div>
      ),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      render: (text) => (
        <div
          className={`font-bold text-lg text-gray-900 bg-gray-100 rounded-md text-center`}
        >
          {text === "n/a" ? "-" : text === "male" ? "♂" : "♀"}
        </div>
      ),
    },
    {
      title: "Height (cm)",
      dataIndex: "height",
      render: (text) => text,
      align: "center",
    },
    {
      title: "Mass (kg)",
      dataIndex: "mass",
      key: "mass",
      align: "center",
      render: (text) => (
        <div>{text === "unknown" || text === "none" ? "-" : text}</div>
      ),
    },
    {
      title: "Hair color",
      dataIndex: "hair_color",
      key: "hair_color",
      render: (text) => (
        <div>{text === "n/a" || text === "none" ? "-" : text}</div>
      ),
    },
    {
      title: "Eye Color",
      dataIndex: "eye_color",
      key: "eye_color",
      render: (text) => (
        <div
          className={`text-${text}-800 bg-${text}-200 rounded-md text-center`}
        >
          {text}
        </div>
      ),
    },
    {
      title: "Starships",
      dataIndex: "starships",
      key: "starships",
      render: (array) => <div>{array.length === 0 ? "0" : array.length}</div>,
    },
    {
      title: "Vehicles",
      dataIndex: "vehicles",
      key: "vehicles",
      render: (array) => <div>{array.length === 0 ? "0" : array.length}</div>,
    },
    {
      title: "Films",
      dataIndex: "films",
      key: "films",
      render: (array) => <div>{array.length === 0 ? "0" : array.length}</div>,
    },
  ];

  return (
    <div className="shadow-lg rounded-xl w-full font-mono">
      <Table
        dataSource={characters}
        size="middle"
        columns={columns}
        pagination={false}
        scroll={{ x: 800, y: 400 }}
      />
      <div className="flex justify-center p-2 bg-gray-200">
        <Pagination
          total={total}
          defaultPageSize={10}
          size="small"
          simple
          onChange={(i) => {
            dispatch(fetchPeople(i));
          }}
        />
      </div>
    </div>
  );
};
