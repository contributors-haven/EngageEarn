import { Box, Container } from "@chakra-ui/react";
import Hero from "../components/Hero";
import MainFeature from "../components/MainFeature";
import CommunityList from "../components/CommunityList";

export default function UserHome() {
  return (
    <Box>
      <Hero />
      <MainFeature />
      <CommunityList />
    </Box>
  );
}
