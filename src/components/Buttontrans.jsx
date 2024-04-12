import React from "react";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import SendIcon from "@mui/icons-material/Send";

export default function Buttontrans() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <div>
      {/* <FormControlLabel
        sx={{
          display: "block",
        }}
        control={
          <Switch
            checked={loading}
            onChange={() => setLoading(!loading)}
            name="loading"
            color="primary"
          />
        }
        label="Loading"
      /> */}

      <Box sx={{ "& > button": { m: 1 } }}>
        <LoadingButton
          size="small"
          onClick={handleClick}
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          <span>Send</span>
        </LoadingButton>
      </Box>
    </div>
  );
}
