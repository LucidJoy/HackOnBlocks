import React from "react";
import { ThirdwebProvider, ConnectButton, darkTheme } from "thirdweb/react";
import { sepolia, baseSepolia, defineChain } from "thirdweb/chains";
import { createWallet, walletConnect, inAppWallet } from "thirdweb/wallets";
import { client } from "@/utils/client";
import { chain } from "@/utils/chain";

export const polygonZkCardano = defineChain({
  id: 2442,
  name: "Polygon zkEVM Cardona Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  blockExplorers: [
    {
      name: "Polygon zkEVM Cardano Block Explorer",
      url: "https://rpc.cardona.zkevm-rpc.com",
      // apiUrl: "https://block-explorer-api.sepolia.zksync.dev/api",
    },
  ],
});

const Connect = () => {
  return (
    <ConnectButton
      client={client}
      wallets={[inAppWallet()]}
      // accountAbstraction={{
      //   // chain: defineChain(baseSepolia),
      //   chain: defineChain(polygonZkCardano),
      //   factoryAddress: "0xb7a663d6AF0EDB735f4aFb9Eb72e6702beE8278c",
      //   sponsorGas: true,
      // }}
      connectButton={{
        style: {
          fontFamily: "syne",
        },
      }}
      theme={darkTheme({
        colors: {
          accentText: "#FF6B6B",
          accentButtonBg: "#FF6B6B",
          skeletonBg: "#FF6B6B",
          secondaryIconColor: "#FF6B6B",
          primaryButtonBg: "#FF6B6B",
          primaryButtonText: "#fff",
        },
      })}
    />
  );
};

export default Connect;
