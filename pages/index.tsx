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
  Link,
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

export default function Home() {
  const router = useRouter();
  return (
    <Flex
      height={{ base: "70vw", md: "45vw" }}
      justifyContent={"center"}
      // pb={{ base: "5vw", md: "6vw" }}
    >
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={6}
      >
        <Heading
          color={"brand.black"}
          fontWeight={900}
          lineHeight={1.2}
          textColor={"brand.yellow"}
          fontSize={useBreakpointValue({ base: "5vw", md: "7.5vw" })}
        >
          <Flex flexDirection={"row"} gap={4}>
            <Text textColor={"brand.orange"}>Earn</Text> by{" "}
            <Text textColor={"brand.blue"}>Contributing</Text>{" "}
          </Flex>
        </Heading>

        <Heading
          color={"brand.orange"}
          fontWeight={900}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "5vw", md: "7.5vw" })}
        >
          Communities
        </Heading>
        <Flex gap={"10"}>
          <Button
            size={useBreakpointValue({ base: "md", md: "lg" })}
            // bgGradient="linear(to-l,  brand.darkBlue,#012b9e,)"

            bg={"brand.yellow"}
            rounded={"lg"}
            p={"10"}
            color={"brand.white"}
            mt={6}
            fontWeight={700}
            fontSize={"2xl"}
            _hover={{ bg: "brand.orange", shadow: "md" }}
            onClick={() => router.push("/userHome")}
          >
            Community Contributor
          </Button>
          <Button
            size={useBreakpointValue({ base: "md", md: "lg" })}
            // bgGradient="linear(to-l,  brand.darkBlue,#012b9e,)"
            bg={"brand.blue"}
            rounded={"lg"}
            color={"brand.white"}
            p={"10"}
            mt={6}
            fontSize={"2xl"}
            fontWeight={700}
            _hover={{ bg: "brand.orange", shadow: "md" }}
            onClick={() => router.push("/registerCommunity")}
          >
            Register Commnunity
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
