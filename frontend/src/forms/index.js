import React from "react";
import Registration from "./registration";
import Covid from "./covid";
import Aesthetics from "./aesthetics";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
}));

const Forms = () => {
  const [covidDone, setCovidDone] = React.useState(false);
  const [registrationDone, setRegistrationDone] = React.useState(false);
  const [aestheticsDone, setAestheticsDone] = React.useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  let covidTab = covidDone ? (
    <FontAwesomeIcon icon={faCheck} size="lg" />
  ) : (
    "Covid Assessment"
  );

  let regTab = registrationDone ? (
    <FontAwesomeIcon icon={faCheck} size="lg" />
  ) : (
    "Registration"
  );

  let aestheticTab = aestheticsDone ? (
    <FontAwesomeIcon icon={faCheck} size="lg" />
  ) : (
    "Aesthetic History"
  );
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Container>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
            centered
          >
            <Tab label={covidTab} {...a11yProps(0)} />
            <Tab label={regTab} {...a11yProps(1)} />
            <Tab label={aestheticTab} {...a11yProps(2)} />
          </Tabs>
        </Container>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Covid setCovidDone={setCovidDone} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Registration setRegistrationDone={setRegistrationDone} />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Aesthetics setAestheticsDone={setAestheticsDone} />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

export default Forms;
