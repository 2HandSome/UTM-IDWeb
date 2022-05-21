import axios from "axios"
import React, {useEffect, useState} from 'react';
import {Table} from "antd";

const SearchResult = () => {
    const [tableData, setTableData] = useState();

    useEffect(() => {
        axios.get("http://localhost:8080/digit/all").then((data) =>{
            setTableData(data.data);
        })
    },[tableData])

    console.log(tableData)
    const data = [
        {
            title: 'Name',
            key: 'nameOfDigit',
            dataIndex: 'nameOfDigit',
            fixed: "left",
            align: "left",
            width: 80,
        },
        {
            title: 'Value',
            key: 'digit',
            dataIndex: 'digit',
            fixed: "left",
            align: "left",
            width: 80,
        },
        {
            title: 'Result',
            key: 'response',
            dataIndex: 'response',
            fixed: "left",
            align: "left",
            width: 80,
        },
    ];

    return (<Table
        className={'default-table'}
        columns={data}
        dataSource={tableData}
        size={'small'}
        bordered
        sticky
    />)
    // return "ok"
}

export default SearchResult;