import { Alert, AlertTitle, Button, Snackbar } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h1>Home</h1>
      <Box sx={{ display: "grid", gap: "1rem" }}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is a warning alert — check it out!
        </Alert>

        <Button
          variant="contained"
          onClick={() => setOpen(true)}
        >
          Open
        </Button>

        <Snackbar open={open}>
          autoHideDuration={1000}
          onClose={() => setOpen(false)}
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error alert - check it out!
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
}
