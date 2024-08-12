import {
    Input,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from '@chakra-ui/react'
import axios from "axios"
import { useEffect, useState } from "react"
import { api } from "../actions/api"
import { Profile } from "../profile/profile"

export const StudentData = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')

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
            <Profile />
            <br />
            <br />
            <Input
                color='teal'
                placeholder='Enter gmail or register number or mobile number'
                _placeholder={{ color: 'inherit' }}
                onChange={(e) => setSearch(e.target.value)}
            />
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
                            data?.filter((filt) => filt?.Gmail?.toLowerCase()?.includes(search?.toLowerCase()) ||
                                filt?.Registerno?.toLowerCase()?.includes(search?.toLowerCase()) ||
                                filt?.Phone?.includes(search?.toLowerCase()))?.sort((a,b)=>a?.Phone-b?.Phone)?.map((val) => (
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