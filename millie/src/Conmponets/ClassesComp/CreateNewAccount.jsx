import React from "react";
import {
  Stack,
  Box,
  Heading,
  Image,
  Divider,
  Text,
  Button,
  Input,
} from "@chakra-ui/react";

const CreateNewAccount = () => {
  return (
    <Box p={4} w={"460px"} boxShadow="md" m={"auto"} mt="30px">
      <Stack spacing={"26px"}>
        <Heading>Create an account</Heading>
        <Divider></Divider>
        <Text mt={"5"}>
          Save an average of 15% on our premium as a member—it’s always free.
        </Text>
        <Button
          //   onClick={SigninWthGoogle}
          colorScheme={"blue"}
          w="100%"
          p={6}
        >
          <Image
            //   src={img}
            borderRadius="5px"
            mr={"1"}
            w="30px"
          ></Image>
          Sign in with google
        </Button>
        <Text textAlign={"center"}>Or</Text>
        <Input
          //   value={email}
          //   onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email Address"
          pt={7}
          pb="7"
          isRequired
          border={"1px"}
        />
        <Input
          //   value={firstname}
          //   onChange={(e) => setFirstName(e.target.value)}
          border={"1px"}
          type="text"
          placeholder="First name"
          pt={7}
          pb="7"
          isRequired
        />
        <Input
          //   value={Surename}
          //   onChange={(e) => setSurename(e.target.value)}
          border={"1px"}
          type="text"
          placeholder="Surename"
          pt={7}
          pb="7"
          isRequired
        />
        <Input
          //   value={password}
          //   onChange={(e) => setpassword(e.target.value)}
          border={"1px"}
          type="password"
          placeholder="Password"
          pt={7}
          pb="7"
          isRequired
        />
        <Text>
          By signing in, I agree to the immortal yoga Terms and Conditions.
        </Text>
        <Button
          //   onClick={loginUser}
          w={"100%"}
          colorScheme="blue"
          //   isDisabled={email === ""}
        >
          Sign In
        </Button>
        <Stack textAlign={"center"} direction="column">
          <Text>
            Already have an account?
            {/* <Link to={"/signin"}> */}
            Sign In
            {/* </Link> */}
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CreateNewAccount;
