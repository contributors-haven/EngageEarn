import FileUpload from "@/components/FileUpload";
import {
  Box,
  SimpleGrid,
  Button,
  Flex,
  Heading,
  Text,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  Input,
  Link,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputLeftElement,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const brandPrimary = defineStyle({
  textDecoration: "underline",
  color: "white",
  fontFamily: "serif",
  fontWeight: "normal",

  // let's also provide dark mode alternatives
  _dark: {
    color: "orange.800",
  },
});

import { ReactElement } from "react";

export default function RegisterCommunity() {
  const router = useRouter();
  return (
    <Flex
      height={{ base: "70vw", md: "47vw" }}
      justifyContent={"center"}
      // pb={{ base: "5vw", md: "6vw" }}
    >
      <Flex
        flexDirection={"column"}
        justifyContent={"top"}
        alignItems={"center"}
        gap={6}
      >
        <Heading
          color={"brand.black"}
          fontWeight={900}
          lineHeight={1.2}
          textColor={"brand.yellow"}
          fontSize={useBreakpointValue({ base: "5vw", md: "4vw" })}
        >
          <Text my={16} textColor={"brand.orange"}>
            Register Your Community
          </Text>
        </Heading>
        <Flex flexDirection={"row"} gap={20} width={"full"}>
          <div>
            <Stack spacing={8}>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                Community Name
              </Text>
              <InputGroup size={"lg"}>
                <Input
                  borderColor="black"
                  focusBorderColor="brand.blue"
                  placeholder="Community Name"
                />
              </InputGroup>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                Twitter Account
              </Text>
              <InputGroup size={"lg"}>
                <InputLeftAddon
                  borderColor="black"
                  children="https://twitter.com/"
                />
                <Input borderColor="black" placeholder="Twitter Handle" />
              </InputGroup>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                Github
              </Text>
              <InputGroup size={"lg"}>
                <InputLeftAddon
                  borderColor="black"
                  children="https://github.com/"
                />
                <Input
                  borderColor="black"
                  focusBorderColor="brand.blue"
                  placeholder="Github Account"
                />
              </InputGroup>
            </Stack>
          </div>
          {/* file upload */}
          <VStack alignItems={"baseline"} width={"50%"} gap={"3"}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              Homepage
            </Text>
            <InputGroup size={"lg"}>
              <InputLeftAddon borderColor="black" children="https://" />
              <Input
                borderColor="black"
                focusBorderColor="brand.blue"
                placeholder="Github Account"
              />
            </InputGroup>

            <Text fontSize={"2xl"} fontWeight={"bold"} my={"1rem"}>
              File upload
            </Text>

            <FileUpload />
          </VStack>
        </Flex>

        <Flex gap={"10"}>
          <Button
            size={useBreakpointValue({ base: "md", md: "lg" })}
            // bgGradient="linear(to-l,  brand.darkBlue,#012b9e,)"
            bg={"brand.yellow"}
            rounded={"lg"}
            color={"brand.white"}
            p={"10"}
            mt={10}
            fontSize={"2xl"}
            fontWeight={700}
            _hover={{ bg: "brand.orange", shadow: "md" }}
            onClick={() => router.push("/depositFund")}
          >
            Register Commnunity
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
