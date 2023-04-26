import "./options.css";
import { MoreVert } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import IconButton from '@mui/material/IconButton';
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
const ITEM_HEIGHT = 48;

function Options({ onClickEdit, onClickDelete, options, id }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClickTab = (index) => {
    if (index === 0) {
      onClickEdit && onClickEdit(id);
    }
    if (index === 1) {
      onClickDelete && onClickDelete(id);
    }
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        color={"info"}
        sx={{ color: "white" }}
      >
        <MoreVert sx={{ color: "black" }}/>
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={() => handleClickTab(index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default Options;
