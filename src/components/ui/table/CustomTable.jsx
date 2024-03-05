import React, {useEffect, useState} from 'react';
import { Table } from 'react-bootstrap';

export const CustomTable = ({data, buttons}) => {
    //const [columnHeader, setColumnHeader] = useState()
    const [rows, setRows] = useState(data)
    const columnHeader = data.length != 0 ? Object.keys(data[0]) : [];


    useEffect(()=>{
        setRows(data);
        console.log(columnHeader);
    },[data])   
    

    return (
        <Table>
            <thead>
                {columnHeader.length != 0 ? 
                    <tr>
                        {columnHeader.map((value, index)=>{
                            return(<th key={index}>{value}</th>)
                        })}
                    </tr>
                    :<></>}
            </thead>
            <tbody>
                {rows.map((row, indexRow)=>{
                    return(
                        <tr key={indexRow}>
                            {columnHeader.map((column, index)=>{
                                return(<td key={index}>{row[column]}</td>)
                            })}
                        </tr>
                    )
                })}      
            </tbody>
        </Table>
    );
};

CustomTable.defaultProps = {
    data: [],
    buttons: []
}