import {
    Box, Button, Card, CardBody, FormControl,
    FormHelperText,
    FormLabel,
    Input, Text, VStack
} from "@chakra-ui/react";
import { api } from "../actions/api";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const SignUp = () => {
    const nav=useNavigate();
    const [gmail, setGmail] = useState()
    const [password, setPassword] = useState()
    const [phone, setPhone] = useState()
    const [register, setRegister] = useState()

    const Signup = async () => {
        await axios.post(api+"/signup",{gmail,password,phone,register})
        .then((res)=>{
            console.log(res?.data)
            if(res.data.message){
                console.log(res?.data?.values)
                alert(res.data.message)
                nav('/signin')
            } else {
                alert(res.data.error)
                // window.location.href="/signup"
                nav('/signup')
            }
        })
        .catch((e)=>console.log(e))
    }
    

    return (
        <Box
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg="gray.50"
        >
            <Card
                width="400px"
                boxShadow="lg"
                p={6}
                borderRadius="md"
            >
                <CardBody>
                    <VStack spacing={4} align="stretch">

                        <FormControl id="registernumber">
                            <FormLabel>Register Number</FormLabel>
                            <Input type="text" focusBorderColor="teal.500" onChange={(e) => setRegister(e.target.value)} />
                        </FormControl>

                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" focusBorderColor="teal.500" onChange={(e) => setGmail(e.target.value)} />
                            <FormHelperText>We'll never share your email.</FormHelperText>
                        </FormControl>

                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" focusBorderColor="teal.500" onChange={(e) => setPassword(e.target.value)} />
                            <FormHelperText>We'll never share your password.</FormHelperText>
                        </FormControl>

                        <FormControl id="number">
                            <FormLabel>Phone number</FormLabel>
                            <Input type="number" focusBorderColor="teal.500" onChange={(e) => setPhone(e.target.value)} />
                        </FormControl>

                        <Button colorScheme="teal" size="lg" mt={4} onClick={Signup}>Sign Up</Button>

                        <Text>
                            already have an account ? <Link to={"/signin"}> 
                            <Button colorScheme="green">sign in
                                </Button>
                                 </Link>
                        </Text>
                    </VStack>
                </CardBody>
            </Card>
        </Box>
    )
}
