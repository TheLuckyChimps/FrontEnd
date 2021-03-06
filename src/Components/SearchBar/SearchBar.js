import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.9),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.95),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(4),
    width: "350px",
    opacity: "0.75"
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} className="search--bar">
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
      ></IconButton>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Cauta..."
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </Box>
  );
}
