import { defineChain } from "thirdweb";
import { client } from "./client";
import { chain } from "./chain";
import { getContract } from "thirdweb";

export const nftCollectionContractAddress =
  "0xec80A85E80229094F9B962fe5D677B043A95F837";

export const contract = getContract({
  client: client,
  chain: chain,
  address: nftCollectionContractAddress,
});
