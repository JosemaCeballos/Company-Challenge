const options = (nftCreate) => {
  const option = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-client-secret": "sk_test.Gbv3KfO1.SVWzF1zKkTFGSF3WMmKNdT1bM1iCTz50",
      "x-project-id": "c8798cf2-800f-4dfd-a12a-9a38122bca95",
    },
    body: JSON.stringify({
      recipient: "email:josemaceballos1998@gmail.com:solana",
      metadata: {
        name: nftCreate.name,
        image: nftCreate.image,
        description: nftCreate.description,
        attributes: [
          {
            trait_type: "Test",
            value: "true",
          },
        ],
      },
    }),
  };
  return option;
};

module.exports = { options };
