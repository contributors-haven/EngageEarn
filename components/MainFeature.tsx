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
} from "@chakra-ui/react";

import { useRouter } from "next/navigation";

export default function MainFeature() {
  const router = useRouter();
  return (
    <Flex
      height={{ base: "70vw", md: "70vw" }}
      justifyContent={"center"}
      pb={{ base: "5vw", md: "6vw" }}
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
          fontSize={useBreakpointValue({ base: "5vw", md: "6vw" })}
        >
          <Flex flexDirection={"row"} gap={4}>
            {/* <Text bgGradient="linear(to-l,  #fad60a,#e94f08,)" bgClip="text"> */}
            <Text textColor={"brand.orange"}>Earn</Text> by{" "}
            <Text textColor={"brand.blue"}>Contributing</Text>{" "}
            {/* <Text bgGradient="linear(to-l, #7928CA, brand.pink)" bgClip="text">
              Improving
            </Text> */}
          </Flex>
        </Heading>

        <Heading
          color={"brand.orange"}
          fontWeight={900}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "5vw", md: "6vw" })}
        >
          Communities
        </Heading>
        <Button
          size={useBreakpointValue({ base: "md", md: "lg" })}
          bg={"brand.blue"}
          rounded={"lg"}
          fontSize={"2xl"}
          color={"white"}
          p={"10"}
          mt={6}
          fontWeight={700}
          _hover={{ bg: "blue.400", shadow: "md" }}
          onClick={() => router.push("/userHome#list")}
        >
          Check Community List
        </Button>
      </Flex>
    </Flex>
  );
}
