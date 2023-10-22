import FileUpload from "@/components/FileUpload";
import { CalendarIcon } from "@chakra-ui/icons";
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
  Checkbox,
  useToast,
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

export default function RegisterCommunity() {
  const router = useRouter();
  const toast = useToast();
  return (
    <Flex
      height="45vw"
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
          <Text mt={16} mb={12} textColor={"brand.orange"}>
            Start Your Campaign
          </Text>
        </Heading>
        <Flex
          flexDirection={"row"}
          gap={20}
          width={"100%"}
          justifyContent={"center"}
        >
          <Stack spacing={"2.2rem"}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              Campaign Banner Image
            </Text>
            <FileUpload />
          </Stack>
          <Stack spacing={"1.5rem"}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              {" "}
              Campaign Start Date{" "}
            </Text>
            <InputGroup>
              <Input
                borderColor="black"
                focusBorderColor="brand.blue"
                placeholder="Select Date and Time"
                textColor={"brand.black"}
                size="lg"
                type="datetime-local"
                sx={{
                  "::-webkit-calendar-picker-indicator": {
                    background:
                      "url(https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/calendar-16.png) center/80% no-repeat",
                    color: "black",
                  },
                }}
              />
            </InputGroup>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              {" "}
              Campaign End Date{" "}
            </Text>
            <InputGroup>
              <Input
                borderColor="black"
                focusBorderColor="brand.blue"
                placeholder="Select Date and Time"
                textColor={"brand.black"}
                size="lg"
                type="datetime-local"
                sx={{
                  "::-webkit-calendar-picker-indicator": {
                    background:
                      "url(https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/calendar-16.png) center/80% no-repeat",
                    color: "black",
                  },
                }}
              />
            </InputGroup>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              Amount For Campaign in DAI
            </Text>

            <InputGroup size={"lg"}>
              <InputLeftAddon borderColor="black" children="Amount DAI" />
              <Input borderColor="black" focusBorderColor="brand.blue" />
            </InputGroup>

            <Checkbox fontSize={"xl"} fontWeight={"bold"} defaultChecked>
              I agree with this amount as a Campaign Fund{" "}
            </Checkbox>
          </Stack>
        </Flex>
        <Flex gap={10}>
          <Button
            size={useBreakpointValue({ base: "md", md: "lg" })}
            // bgGradient="linear(to-l,  brand.darkBlue,#012b9e,)"
            bg={"brand.yellow"}
            rounded={"lg"}
            color={"brand.white"}
            p={"10"}
            mt={6}
            fontSize={"2xl"}
            fontWeight={700}
            _hover={{ bg: "brand.orange", shadow: "md" }}
            onClick={() =>
              toast({
                title: "Campaign Uploaded Successfully.",
                description: "We've uploaded your Community Campaign.",
                status: "success",
                duration: 1000,
                isClosable: true,
              })
            }
          >
            Submit Campaign
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
            onClick={() => router.push("/")}
          >
            Home
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
