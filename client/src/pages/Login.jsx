import React from "react";
import { Box, Button, FormControl, FormLabel, Input, Select, VStack, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="100vh" 
      bg="gray.100" 
      p={5}
    >
      <Box 
        bg="white" 
        p={8} 
        borderRadius="md" 
        boxShadow="md" 
        maxWidth="400px" 
        w="full"
      >
        <Heading mb={6} textAlign="center" fontWeight="semibold" color="black">
          Login
        </Heading>
        <VStack spacing={4} align="stretch">
          {/* Username Input */}
          <FormControl id="username" isRequired>
            <FormLabel color="black">Username</FormLabel>
            <Input 
              type="text" 
              placeholder="Enter your username" 
              focusBorderColor="black"
              borderColor="gray.400"
              _hover={{ borderColor: "black" }}
              color="black"  // Ensure input text is black
            />
          </FormControl>

          {/* Password Input */}
          <FormControl id="password" isRequired>
            <FormLabel color="black">Password</FormLabel>
            <Input 
              type="password" 
              placeholder="Enter your password" 
              focusBorderColor="black"
              borderColor="gray.400"
              _hover={{ borderColor: "black" }}
              color="black"  // Ensure password text is black
            />
          </FormControl>

          {/* Role Dropdown */}
          <FormControl id="role" isRequired>
            <FormLabel color="black">Select Role</FormLabel>
            <Select 
              placeholder="Select role" 
              focusBorderColor="black"
              borderColor="gray.400"
              _hover={{ borderColor: "black" }}
              color="white"  // Set dropdown selected option text to white
              bg="black"     // Background of dropdown set to black
            >
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="operator">Operator</option>
              <option value="logistics">Logistics</option>
            </Select>
          </FormControl>

          {/* Login Button */}
          <Button 
            colorScheme="blackAlpha" 
            bg="black" 
            color="white" 
            width="full" 
            _hover={{ bg: "gray.700" }} 
            transition="background-color 0.3s"
          >
            Login
          </Button>

          {/* Register Button */}
          <Text textAlign="center" color="gray.600">
            Don't have an account?{" "}
            <Button 
              variant="link" 
              color="black" 
              _hover={{ textDecoration: "underline", color: "gray.700" }} 
              transition="color 0.3s"
            >
              Register / Create Account
            </Button>
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default Login;
