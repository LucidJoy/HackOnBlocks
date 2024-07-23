// const SECRET_KEY =
//   "-ab-555_l8dM7Uv8kSE_Sry-0wMr9DGwqHv7ZfvdPi_rz04NouhMBSqd1mXJluwY1ajI9giFFQrc6DqCTh3PRQ";

const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY;
const ENGINE_URL = process.env.NEXT_PUBLIC_NGROK_ENGINE_URL;

const handler = async (req, res) => {
  const { method } = req;

  if (method === "POST") {
    const { cardImage, address } = req.body;

    try {
      const response = await fetch(
        // `${ENGINE_URL}/contract/2442/0xE6138080545953902a05c32fd47256aE47a22Fa1/erc721/mint-to`,
        `https://localhost:3005/contract/2442/0xE6138080545953902a05c32fd47256aE47a22Fa1/erc721/mint-to`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${SECRET_KEY}`, //thirdweb secret key
            "x-backend-wallet-address":
              "0xb53A165f344827da29f7d489F549a197F18528d1",
          },
          body: JSON.stringify({
            receiver: address,
            metadata: {
              image: cardImage,
            },
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Minted NFT: ", data);
        return res
          .status(200)
          .json({ message: "Successfully minted NFT.", data });
      } else {
        const errorText = await response.text();
        console.log("Error: ", errorText);
        return res
          .status(response.status)
          .json({ message: "Something went wrong.", error: errorText });
      }
    } catch (error) {
      console.error("Network error:", error);
      return res
        .status(500)
        .json({ message: "Network error occurred.", error: error.message });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
};

export default handler;
