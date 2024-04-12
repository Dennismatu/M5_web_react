import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Axios from "axios";
import { ErrorBoundary } from "react-error-boundary";

export default function Location() {
  const [locationState, setLocationState] = useState([]);

  useEffect(() => {
    handlerRequest();
  }, []);

  const handlerRequest = async () => {
    const results = await Axios.get(
      "https://developer.nrel.gov/api/pvwatts/v8.json?api_key=DEMO_KEY&azimuth=180&system_capacity=4&losses=14&array_type=1&module_type=0&gcr=0.4&dc_ac_ratio=1.2&inv_eff=96.0&radius=0&dataset=nsrdb&tilt=10&address=boulder,%20co&soiling=12|4|45|23|9|99|67|12.54|54|9|0|7.6&albedo=0.3&bifaciality=0.7"
    );
    // const obj = JSON.parse(results);
    console.log(results);
    setLocationState(results.data.outputs);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
          <Typography variant="h4">Locations</Typography>
        </Box>
      </Box>
      <ErrorBoundary fallback={<p>⚠ Something went wrong</p>}>
        <div>
          <h5 className="card-title">{results["outputs"].ac_annual}</h5>
        </div>
      </ErrorBoundary>
    </>
  );
}
