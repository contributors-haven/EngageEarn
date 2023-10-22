import {
  Box,
  HStack,
  Image,
  Text,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export default function ActiveCampaign() {
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
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charSet="utf-8"
            ></script>
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
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charSet="utf-8"
            ></script>
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
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charSet="utf-8"
            ></script>
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
}
