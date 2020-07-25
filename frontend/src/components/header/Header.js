import React from "react";
import Logo from "../../assets/landings-logo.svg";
import "./styles.css";

import { Button, Grid, Container } from "@material-ui/core";
const Header = () => {
  return (
    <>
      <div className="background">
        <Container>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <img className="logoMobile" src={Logo} alt="landings logo" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div
                style={{
                  backgroundColor: "#6C0D0D",
                  padding: "14px 14px",
                  width: "auto",
                  maxWidth: "280px",
                  margin: "auto",
                  marginTop: "76px",
                }}
              >
                <a
                  style={{ textDecoration: "none" }}
                  href="https://www.landingsurgery.ca/"
                >
                  <Button
                    style={{
                      fontSize: "20px",
                      color: "white",
                      fontWeight: 600,
                      border: ".5px solid hsla(0,0%,100%,.5)",
                      padding: "14px 40px",
                      backgroundColor: "#6C0D0D",
                    }}
                    variant="primary"
                    type="button"
                    onClick=""
                  >
                    Back to Website
                  </Button>
                </a>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Header;
