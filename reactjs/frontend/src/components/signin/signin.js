import { 
    Card, 
    CardBody, 
    FormControl, 
    FormHelperText, 
    FormLabel, 
    Input, 
    Button, 
    VStack, 
    Box, 
    Text
} from "@chakra-ui/react";
import axios from 'axios'
import { api } from "../actions/api";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const SignIn = () => {
    const [name,setName]=useState()
    const [password,setPassword]=useState()
    const nav=useNavigate()

    const Signin=async()=>{
        await axios.post(api+"/signin",{name,password})
        .then((res)=>{
            if(res.data.message){
                sessionStorage.auth=JSON.stringify(res?.data?.values)
                console.log(res?.data?.values)
                alert(res.data.message)
                nav('/home')
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
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" focusBorderColor="teal.500" onChange={(e)=>setName(e.target.value)} />
                            <FormHelperText>We'll never share your email.</FormHelperText>
                        </FormControl>

                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" focusBorderColor="teal.500" onChange={(e)=>setPassword(e.target.value)}/>
                            <FormHelperText>We'll never share your password.</FormHelperText>
                        </FormControl>

                        <Button colorScheme="teal" size="lg" mt={4} onClick={Signin}>Sign In</Button>
                        <Text>
                            Don't have an account ? <Link to={"/signup"}>
                        <Button colorScheme="purple">
                        sign up
                            </Button>
                            </Link>
                        </Text>
                    </VStack>
                </CardBody>
            </Card>
        </Box>
    );
};
