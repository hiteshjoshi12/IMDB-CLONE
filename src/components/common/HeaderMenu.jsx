import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { routhPath } from "../../constants/Route";

const HeaderMenu = ({ open, handleClose }) => {
  const openmenu = Boolean(open);
  return (
    <Menu
      id="basic-menu"
      anchorEl={open}
      open={openmenu}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <Link to ={`${routhPath.Categories}?category=popular`}style={{textDecoration: 'none' , color: 'inherit'}}>
        <MenuItem onClick={handleClose}>Popular</MenuItem>
      </Link>
      <Link to ={`${routhPath.Categories}?category=toprated`}style={{textDecoration: 'none' , color: 'inherit'}}>
        <MenuItem onClick={handleClose}>Top Rated</MenuItem>
      </Link>
      <Link to ={`${routhPath.Categories}?category=upcoming`} style={{textDecoration: 'none' , color: 'inherit'}}>
        <MenuItem onClick={handleClose}>Upcoming</MenuItem>
      </Link>
      
    </Menu>
  );
};
export default HeaderMenu;
