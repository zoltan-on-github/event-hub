import { Stack, Link } from "@chakra-ui/react";
import useEvents from "../hooks/useEvents";

interface Props {
  onSelectArtist: (artist: string) => void;
  selectedArtist: string | null;
}

const SideBar = ({ onSelectArtist, selectedArtist }: Props) => {
  const { artists } = useEvents(null, null);
  let artist_array = Array.from(artists);
  artist_array.sort((a, b) => a.localeCompare(b));

  return (
    <Stack paddingTop="50px" paddingLeft="10px">
      {artist_array.map((artist, index) => (
        <Link
          onClick={() => onSelectArtist(artist)}
          textAlign="left"
          key={index}
          fontWeight={selectedArtist === artist ? "bold" : "normal"}
        >
          {artist}
        </Link>
      ))}
    </Stack>
  );
};

export default SideBar;
