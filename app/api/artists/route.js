import { getAccessToken } from "../../../lib/spotify";

export async function GET() {
  const token = await getAccessToken();

  //const taylorSwift = "06HL4z0CvFAxyc27GXpf02";

  const artists = [
    {
      name: "Taylor Swift",
      spotify_id: "06HL4z0CvFAxyc27GXpf02",
    },
    {
      name: "Beyoncé",
      spotify_id: "6vWDO969PvNqNYHIOW5v0m",
    },
    {
      name: "Ariana Grande",
      spotify_id: "66CXWjxzNUsdJxJ2JdwvnR",
    },
    {
      name: "Declan Mckenna",
      spotify_id: "4sNG6zQBmtq7M8aeeKJRMQ",
    },
  ];

  const artistsIds = artists.map((artist) => artist.spotify_id);

  // Convert the artist IDs to a string
  const artistsString = artistsIds.join(",");

  const apiResponse = await fetch(
    `https://api.spotify.com/v1/artists/?ids=${artistsString}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const artistsData = await apiResponse.json();

  return new Response(JSON.stringify(artistsData));
}
