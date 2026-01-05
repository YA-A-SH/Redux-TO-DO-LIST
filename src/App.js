import { Container, Stack } from "@mui/material";
import Header from "./Components/Header";
import Body from "./Components/Body";
function App() {
  return (
    <>
      <Container maxWidth="xl" sx={{ height: "100vh", padding: "20px" }}>
        <Stack>
          <Header />
        </Stack>
        <Stack>
          <Body />
        </Stack>
      
      </Container>
    </>
  );
}

export default App;
