import {
  Box,
  HStack,
  Image,
  Text,
  VStack,
  Grid,
  GridItem,
  Button,
  useToast,
} from "@chakra-ui/react";

import engageEarnABI from "../abi/engagEearn.json";

import { useContractWrite } from "wagmi";
import Link from "next/link";
import { wait } from "@/utills/time";
import { useState } from "react";

export default function ActiveCampaign() {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const [verifyUser, setVerifyUser] = useState("");

  const { data, isSuccess, write, writeAsync } = useContractWrite({
    address: "0xF2c3600751921EEf63894934187Af0Cb19bD5507",
    abi: engageEarnABI,
    functionName: "increment",
  });

  const {
    data: rewardData,
    isSuccess: rewardSuccess,
    write: rewardWrite,
    writeAsync: rewardAsync,
  } = useContractWrite({
    address: "0x4A8598A4FAfe5145E445f4aDaD466842D8202120",
    abi: engageEarnABI,
    functionName: "rewardCampaignParticipants",
    args: [0],
  });

  const VerifyUser = async () => {
    setLoading(true);
    await writeAsync();

    try {
    } catch (error) {}
    await wait(3000);
    setLoading(false);
    toast({
      title: "Verification Success",

      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  const getReward = async () => {
    setLoading(true);
    await writeAsync();

    try {
    } catch (error) {}
    await wait(3000);
    setLoading(false);
    toast({
      title: "Rewards Distrbuted",

      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };
  return (
    <Box mb={"3"}>
      <VStack alignItems={"flex-start"} pt={"20"}>
        <Text fontSize={"4xl"} fontWeight={"bold"} pb={4}>
          Active Campaigns
        </Text>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <GridItem
            w="100%"
            h="max-content"
            // border={"5px solid"}
            // borderColor={"brand.yellow"}
          >
            <blockquote className="twitter-tweet">
              <p lang="en" dir="ltr">
                Our brand-new website is live!
                <br />
                <br />
                Discover the home of our truly community-driven DeFi
                infrastructure.
                <br />
                <br />
                Visit us at ⚡️{" "}
                <a href="https://t.co/ZJZxyg1WLZ">
                  https://t.co/ZJZxyg1WLZ
                </a>{" "}
                ⚡️{" "}
                <a href="https://t.co/VokPHSyqou">pic.twitter.com/VokPHSyqou</a>
              </p>
              &mdash; Spark (@sparkdotfi){" "}
              <a href="https://twitter.com/sparkdotfi/status/1714678443697156554?ref_src=twsrc%5Etfw">
                October 18, 2023
              </a>
            </blockquote>{" "}
            {!isSuccess && (
              <Button
                size={"md"}
                // bgGradient="linear(to-l, #7928CA, brand.pink)"
                bg={"brand.blue"}
                p={"4"}
                px={"10"}
                fontSize={"xl"}
                rounded={"lg"}
                color={"white"}
                fontWeight={700}
                _hover={{ bg: "brand.orange" }}
                onClick={() => VerifyUser()}
                isLoading={isLoading}
              >
                Verify
              </Button>
            )}
            {isSuccess && (
              <Button
                size={"md"}
                // bgGradient="linear(to-l, #7928CA, brand.pink)"
                bg={"brand.blue"}
                p={"4"}
                px={"10"}
                fontSize={"xl"}
                rounded={"lg"}
                color={"white"}
                fontWeight={700}
                _hover={{ bg: "brand.orange" }}
                onClick={() => getReward()}
                isLoading={isLoading}
              >
                Reward
              </Button>
            )}
          </GridItem>

          <GridItem w="100%" h="max-content">
            <blockquote className="twitter-tweet">
              <p lang="en" dir="ltr">
                We know you&#39;ve been reading stuff about DAI and rETH, but:
                <br />
                <br />
                rETH is an active collateral asset on Spark, with ~$24 million
                already supplied.
                <br />
                <br />
                There&#39;s 200 million DAI ready to be borrowed, set at a
                steady 5.53% rate, with cross-collateralization enabled.
                <a href="https://t.co/Q6k41dwUol">
                  https://t.co/Q6k41dwUol
                </a>{" "}
                <a href="https://t.co/65KYvni6fN">pic.twitter.com/65KYvni6fN</a>
              </p>
              &mdash; Spark (@sparkdotfi){" "}
              <a href="https://twitter.com/sparkdotfi/status/1712899124306075820?ref_src=twsrc%5Etfw">
                October 13, 2023
              </a>
            </blockquote>{" "}
            <Button
              size={"md"}
              // bgGradient="linear(to-l, #7928CA, brand.pink)"
              bg={"brand.blue"}
              p={"4"}
              px={"10"}
              fontSize={"xl"}
              rounded={"lg"}
              color={"white"}
              fontWeight={700}
              _hover={{ bg: "brand.orange" }}
              onClick={() => VerifyUser()}
            >
              Verify
            </Button>
          </GridItem>
          <GridItem w="100%" h="max-content">
            <blockquote className="twitter-tweet">
              <p lang="en" dir="ltr">
                Big shoutout to{" "}
                <a href="https://twitter.com/DeFiSaver?ref_src=twsrc%5Etfw">
                  @DeFiSaver
                </a>{" "}
                for their Loan Shifter tool, simplifying the migration from
                Maker to Spark with a single click — relevant right now for rETH
                users!
                <br />
                <br />
                Kudos to the talented developers continuously crafting essential
                solutions for our users ⚡️{" "}
                <a href="https://t.co/YFxQcXSaDK">https://t.co/YFxQcXSaDK</a>
              </p>
              &mdash; Spark (@sparkdotfi){" "}
              <a href="https://twitter.com/sparkdotfi/status/1714311011279233486?ref_src=twsrc%5Etfw">
                October 17, 2023
              </a>
            </blockquote>{" "}
            <Button
              size={"md"}
              // bgGradient="linear(to-l, #7928CA, brand.pink)"
              bg={"brand.blue"}
              p={"4"}
              px={"10"}
              fontSize={"xl"}
              rounded={"lg"}
              color={"white"}
              fontWeight={700}
              _hover={{ bg: "brand.orange" }}
              onClick={() => VerifyUser()}
            >
              Verify
            </Button>
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
}
