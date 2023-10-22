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
import engageEarnABI from "../abi/engagEearn.json";
import { useContractWrite } from "wagmi";
import { parseEther } from "viem";

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

import { ReactElement, useState } from "react";
import { wait } from "@/utills/time";

export default function DepositFund() {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const toast = useToast();
  const [deposit, setDeposit] = useState("");

  const { data, isSuccess, write, writeAsync } = useContractWrite({
    address: "0x4A8598A4FAfe5145E445f4aDaD466842D8202120",
    abi: engageEarnABI,
    functionName: "depositDAIFunds",
    args: [deposit],
  });

  const handleDepositInput = (e: any) => {
    console.log("amunt", e.target.value);
    try {
      const amountDai = e.target.value;
      const amountWei = parseEther(amountDai);

      setDeposit(amountWei.toString());
      // setDeposit(amountDai);
    } catch (error) {
      return;
    }
  };

  const depositFund = async () => {
    setLoading(true);
    try {
      await writeAsync();
    } catch (error) {}

    await wait(4000);
    setLoading(false);
    toast({
      title: "Successfully Deposited.",
      description: (
        <Link href="https://goerli.etherscan.io/tx/0x7f3d2ddd8dbdbdaf4e266d877365831e033580c90096adec25d43a9733b82fe4">
          "https://goerli.etherscan.io/tx/0x7f3d2ddd8dbdbdaf4e266d877365831e033580c90096adec25d43a9733b82fe4"{" "}
        </Link>
      ),
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    // router.push("/depositFund");
  };

  return (
    <Flex
      height={{ base: "70vw", md: "48vw" }}
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
            Deposit Community Fund
          </Text>
        </Heading>
        <Flex flexDirection={"row"} gap={20} width={"full"}>
          <div>
            <Stack spacing={"2.2rem"}>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                Current Remaining Balance
              </Text>
              <InputGroup size={"lg"}>
                <Input
                  borderColor="black"
                  focusBorderColor="brand.blue"
                  placeholder="Community Name"
                />
              </InputGroup>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                Deposit Amount in DAI
              </Text>
              <InputGroup size={"lg"}>
                <InputLeftAddon borderColor="black" children="Amount DAI" />
                <Input
                  borderColor="black"
                  focusBorderColor="brand.blue"
                  onChange={handleDepositInput}
                />
              </InputGroup>

              <Checkbox fontSize={"xl"} fontWeight={"bold"} defaultChecked>
                I agree with this amount as a community deposit fund{" "}
              </Checkbox>
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
                onClick={depositFund}
                isLoading={isLoading}
              >
                Deposit Community Fund
              </Button>
            </Stack>
          </div>
          {/* file upload */}
          <Flex
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"100%"}
            height={"30rem"}
          >
            <Flex
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              mb={"10"}
            >
              {/* <Flex
                fontSize={"xl"}
                fontWeight={"bold"}
                width={"10rem"}
                height={"3rem"}
                border={"1px solid black"}
                rounded={"lg"}
                alignItems={"center"}
                paddingLeft={"2"}
              >
                1000
              </Flex>
              <Text paddingLeft={"5"} fontSize={"2xl"} fontWeight={"base"}>
                DAI
              </Text> */}
            </Flex>
            <Button
              size={useBreakpointValue({ base: "md", md: "lg" })}
              // bgGradient="linear(to-l,  brand.darkBlue,#012b9e,)"
              bg={"brand.blue"}
              rounded={"lg"}
              color={"brand.white"}
              p={"10"}
              fontSize={"2xl"}
              fontWeight={700}
              width={"45%"}
              _hover={{
                bg: "brand.orange",
                shadow: "md",
                textDecoration: "none",
              }}
              onClick={() => router.push("/createCampaign")}
            >
              Start Campaigne
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
