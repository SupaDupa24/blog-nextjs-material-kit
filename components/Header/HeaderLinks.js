/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Content"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[ */}
      {/* <ListItem className={classes.listItem}>
        <Button
          href="#about"
          color="transparent"
          
          className={classes.navLink}
        >
          
          About
        </Button>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Button
          href="/videos"
          color="transparent"
          
          className={classes.navLink}
        >
          {/* <Icon className={classes.icons}>unarchive</Icon>  */}
          Videos
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/music"
          color="transparent"
          className={classes.navLink}
        >
        {/* <CloudDownload className={classes.icons} /> */}
           Music
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/gallery"
          color="transparent"
          className={classes.navLink}
        >
        {/* <CloudDownload className={classes.icons} /> */}
           Gallery
        </Button>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Button
          href="/components"
          color="transparent"
          
          className={classes.navLink}
        >
          Upcoming...
        </Button>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Button
          href="/contact"
          color="transparent"
          className={classes.navLink}
        >
        {/* <CloudDownload className={classes.icons} /> */}
           Contact Nala
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/BonaeNala"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/Mutt.Baby"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/nalabonae/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
