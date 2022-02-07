import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import "../../styles/TableStyle.css"

import api_service from '../../services/api_service';
import { api_urls } from '../../services/api_urls';

const columns = [

    /* dummy field names are used */
    { title: 'Name', field: 'name' },
    { title: 'Owner', field: 'username' },
    { title: 'Contains', field: 'email' },
    { title: 'Last Updated', field: 'phone' }
]

export const TableDemo = () => {
    const [data, setTableData] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((data) => data.json())
            .then((data) => { setTableData(data) })
    }, []);

    useEffect( () => {
        const res = api_service.get({
            baseURL: api_urls.url1
        });
        console.log(res);
    }, [])

    return <div className='table'>
        <MaterialTable title="Flows"
            data={data}
            columns={columns}
            options={{
                filtering: true,
                sorting: false
            }}
        />
    </div>;
}
