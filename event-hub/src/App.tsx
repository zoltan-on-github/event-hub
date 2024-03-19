import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import EventGrid from "./components/EventGrid";
import SideBar from "./components/SideBar";
import { useState } from "react";

function App() {
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // mobile view
        lg: `"nav nav" "aside main"`, // 1024px or larger devices
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>

      <Show above="lg">
        {" "}
        <GridItem area="aside">
          <SideBar onSelectArtist={(artist) => setSelectedArtist(artist)} />
        </GridItem>
      </Show>

      <GridItem area="main">
        <EventGrid selectedArtist={selectedArtist} />
      </GridItem>
    </Grid>
  );
}
export default App;
