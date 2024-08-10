import { 
    Card, 
    CardBody, 
    FormControl, 
    FormHelperText, 
    FormLabel, 
    Input, 
    Button, 
    VStack, 
    Box 
} from "@chakra-ui/react";
import axios from 'axios'
import { api } from "../actions/api";
import { useState } from "react";

export const SignIn = () => {
    const [name,setName]=useState()
    const [password,setPassword]=useState()

    const Signin=async()=>{
        await axios.post(api+"/signin",{name,password})
        .then((res)=>{
            if(res.data.message){
                console.log(res?.data?.values)
                alert(res.data.message)
            } else {
                alert(res.data.error)
                window.location.href="/signup"
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
                    </VStack>
                </CardBody>
            </Card>
        </Box>
    );
};
