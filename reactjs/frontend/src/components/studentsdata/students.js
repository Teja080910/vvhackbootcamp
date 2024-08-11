import axios from "axios"
import { api } from "../actions/api"
import { useEffect, useState } from "react"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

export const StudentData = () => {
    const [data, setData] = useState([])

    const featchData = async () => {
        await axios.post(api + "/students")
            .then((res) => {
                setData(res?.data)
            })
            .catch((e) => console.log(e))
    }

    useEffect(() => {
        featchData()
    }, [])

    return (
        <>
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <TableCaption>Bootcamp students data</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Gmail</Th>
                            <Th>Register</Th>
                            <Th>Mobile</Th>
                            <Th>Password</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            data?.map((val) => (
                                <Tr>
                                    <Td>{val.Gmail}</Td>
                                    <Td>{val.Registerno}</Td>
                                    <Td>{val.Phone}</Td>
                                    <Td>{val.Password}</Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}