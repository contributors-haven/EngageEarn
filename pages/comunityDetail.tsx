import AnimeInfo from "@/components/CampaignInfo";
import NextAnime from "@/components/ActiveCampaign";
import TrendingAnime from "@/components/TreandingAnime";
import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import Leaderboard from "./leaderboard";
import CampaignInfo from "@/components/CampaignInfo";
import ActiveCampaign from "@/components/ActiveCampaign";

export default function watchAnime() {
  return (
    <Box pb={10} height={"auto"}>
      <Flex flexDirection={"column"} alignItems={"center"} mt={"10"}>
        {/* <Text
          mt={16}
          mb={12}
          textColor={"brand.orange"}
          fontSize={useBreakpointValue({ base: "5vw", md: "4vw" })}
        >
          Comunity Detail Page
        </Text> */}
        <Image
          width={"80%"}
          height={"45rem"}
          src="/images/sdai-banner.svg"
          rounded={"lg"}
          padding={"20"}
          border={"6px solid"}
          borderColor={"brand.yellow"}
        />
        <Flex
          flexDirection={"column"}
          justifyContent={"flex-start"}
          h={"auto"}
          width={"80%"}
          m={0}
          py={20}
          color={"brand.black"}
          gap={10}
        >
          <CampaignInfo />
          <ActiveCampaign />
          <Leaderboard />
          <TrendingAnime />
        </Flex>
      </Flex>
    </Box>
  );
}
