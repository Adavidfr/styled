import styled from "@emotion/styled";
import { Box, Button, Paper, Typography } from "@mui/material";

export default function Product() {
  const Img = styled("img")({
    width: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });

  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
        mt: 5,
      }}
    >
      <Img
        src="https://preview.redd.it/dandadan-wallpapers-v0-f3dukfm5r0td1.jpeg?width=945&format=pjpg&auto=webp&s=3306960959eca4044bf2ea9cef60327290c039dd"
        alt="dan da dan"
      />
      <Box sx={{ flexGrow: 1, display: "grid", gap: 4 }}>
        <Typography variant="h4">Dan Da Dan</Typography>
        <Typography variant="body1">Anime Description</Typography>
        <Button variant="contained">Add Card</Button>
      </Box>
      <Box
        sx={{ mr: 2 }}
        component="p"
      >
        $19.99
      </Box>
    </Paper>
  );
}
