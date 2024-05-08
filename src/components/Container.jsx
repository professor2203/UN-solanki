import React from "react";
import { Box } from "@mui/material";
const Container = ({children}) => {
  return (
    <>
    <Box sx={{width: "100%", marginx: "auto"}} >{children}</Box>
    </>
  )
}

export default Container;