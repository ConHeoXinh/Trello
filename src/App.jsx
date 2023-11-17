/* eslint-disable react/jsx-no-target-blank */
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme,
} from "@mui/material/styles";

function App() {
  return (
    <>
      <hr />
      <Typography variant="body2" component="h2" color="text.secondary">
        dsfsdf
      </Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  );
}

export default App;
