const PINATA_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJiZDJjYmNlYy0wM2FiLTRhYzAtOGQ5YS04OTY2YjI3MzI1YzAiLCJlbWFpbCI6InlhMjAwMzE5NzFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjY3ZWJmYWE2MjE2MzBiZjYzNjVmIiwic2NvcGVkS2V5U2VjcmV0IjoiNDI0ODk4MDhhMWMzOWNlN2M3ZGRjZGZmNTYyOTIzYWQxYjYyYTMzNTVmMmY5Y2ZkMzI2NzE2MzU4ZmVhY2VkNSIsImV4cCI6MTc4ODk2NjE1Mn0.QvTuEpQKFRPgU8ZnZOnE6s-x5c-9GHXv5fcouxsxQnE"; // paste your Pinata token here
const PINATA_URL = "https://api.pinata.cloud/pinning/pinFileToIPFS";

export async function uploadToIPFS(file) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await fetch(PINATA_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${PINATA_JWT}`,
      },
      body: formData,
    });

    const data = await res.json();
    if (data.IpfsHash) {
      return data.IpfsHash; // CID
    } else {
      console.error("Upload failed:", data);
      return null;
    }
  } catch (error) {
    console.error("Pinata Upload Error:", error);
    return null;
  }
}

export async function fetchFromIPFS(cid) {
  try {
    const url = `https://gateway.pinata.cloud/ipfs/${cid}`;
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`Failed to fetch ${cid} - [${res.status}] ${res.statusText}`);
      return null;
    }
    return await res.text();
  } catch (error) {
    console.error("Pinata Fetch Error:", error);
    return null;
  }
}
