import "./App.css";
import { Button, ButtonGroup, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import EventGrid from "./components/EventGrid";

function App() {
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
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">
        <EventGrid />
      </GridItem>
    </Grid>
  );
}
export default App;
