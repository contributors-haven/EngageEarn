import { NFT_ADDRESS } from "@/const/addresses"
import { Web3Button } from "@thirdweb-dev/react"
import { NextPage } from "next"

const claimNFT: NextPage = () => {
    return(
        <Web3Button contractAddress={NFT_ADDRESS} action={(contract) => contract.erc1155.claim(0,1)} onSuccess={() => alert("Successfully Claimed")}>Claim NFT</Web3Button>
    )
}

export default claimNFT;