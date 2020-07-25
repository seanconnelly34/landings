import React, { useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { Button, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import StatePersonal from "./statePersonal.js";

import Personal from "./components/Personal";
import MedicalHistory from "./components/MedicalHistory";
import Lifestyle from "./components/Lifestyle";
import Skin from "./components/Skin";
import Sun from "./components/Sun";
import Genetic from "./components/Genetic";

import { ValidatorForm } from "react-material-ui-form-validator";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Aesthetics = (props) => {
  const [firstSubmit, setFirstSubmit] = useState(false);
  const [done, setDone] = useState(false);
  const [state, setState] = useState(StatePersonal);
  const [result, setResult] = useState(null);
  const [trimmedSignature, setTrimmedSignature] = useState({});
  const classes = useStyles();

  let sigPad = {};

  const clear = () => {
    sigPad.clear();
    setTrimmedSignature({});
  };

  const trim = () => {
    setTrimmedSignature(sigPad.getTrimmedCanvas().toDataURL("image/png"));
  };

  const firstSubmitCheck = () => {
    setFirstSubmit(true);
  };

  const sendEmail = (event) => {
    event.preventDefault();

    if (
      state.name.length > 2 &&
      state.name.length < 40 &&
      state.dob.length === 10 &&
      state.streetaddress.length > 5 &&
      state.streetaddress.length < 50 &&
      state.city.length > 4 &&
      state.city.length < 50 &&
      state.province.length > 2 &&
      state.province.length < 40 &&
      state.postal.length > 5 &&
      state.postal.length < 9 &&
      state.cellphone.length < 16
    ) {
      setDone(true);
      axios
        .post(
          "/aesthetics",
          {
            ...state,
            trimmedSignature,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((response) => {
          setResult(response.data);
          setState(StatePersonal);
          setDone(true);
          props.setAestheticsDone(true);
        })
        .catch(() => {
          setResult({
            success: false,
            message: "Something went wrong. Try again later",
          });
        });
    }
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const onCheck = (e) => {
    const { name } = e.target;
    setState((prevState) => ({ ...prevState, [name]: !prevState[name] }));
  };
  console.log(state);

  return (
    <>
      <Container>
        {done ? (
          <Grid lg={12} xs={12} sm={12} md={12}>
            <div className="thankyou">
              <p className="thanks">Thank you for your submission.</p>
              <p className="donemessage">
                If you are finished filling out all required forms, please visit
                our <a href="https://www.landingsurgery.ca/">homepage</a> to
                learn more.
              </p>
            </div>
          </Grid>
        ) : (
          <div className={classes.root}>
            {/* <form onSubmit={sendEmail}> */}
            <ValidatorForm onSubmit={sendEmail}>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  {result && (
                    <p className={`${result.success ? "success" : "error"}`}>
                      {result.message}
                    </p>
                  )}
                  <h1 className="registration">
                    Medical Aesthetics Health History
                  </h1>
                </Grid>

                <Personal onInputChange={onInputChange} state={state} />
                <MedicalHistory
                  onCheck={onCheck}
                  onInputChange={onInputChange}
                  state={state}
                  firstSubmit={firstSubmit}
                />
                <Lifestyle
                  onCheck={onCheck}
                  onInputChange={onInputChange}
                  state={state}
                  firstSubmit={firstSubmit}
                />

                <Skin
                  onCheck={onCheck}
                  onInputChange={onInputChange}
                  state={state}
                  firstSubmit={firstSubmit}
                />

                <Sun
                  onCheck={onCheck}
                  onInputChange={onInputChange}
                  state={state}
                  firstSubmit={firstSubmit}
                />
                <Genetic
                  onCheck={onCheck}
                  onInputChange={onInputChange}
                  state={state}
                  firstSubmit={firstSubmit}
                />
                <Grid item xs={12}>
                  <h3>
                    Add your signature in the box below (as big as possible).
                    Please use your mouse, or finger if you have a touch screen.
                  </h3>
                </Grid>
                <Grid item lg={12} xs={12}>
                  {firstSubmit === true && done === false ? (
                    <h3 className="mainError">
                      Please scroll up to complete required fields.
                    </h3>
                  ) : (
                    ""
                  )}
                </Grid>
                <Grid
                  item
                  xs={12}
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <SignatureCanvas
                    penColor="black"
                    canvasProps={{
                      className: "sigCanvas",
                    }}
                    ref={(ref) => {
                      sigPad = ref;
                    }}
                  />

                  <Grid
                    item
                    xs={12}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Button
                      style={{
                        padding: "20px 30px",
                        marginTop: 50,
                        marginBottom: 30,
                        border: "1px solid black",
                      }}
                      onClick={clear}
                    >
                      Clear Signature
                    </Button>
                  </Grid>

                  {/* {trimmedSignature ? <img src={trimmedSignature} /> : null} */}
                </Grid>
                <Grid item lg={12} xs={12}>
                  {firstSubmit === true && done === false ? (
                    <h3 className="mainError">
                      Please scroll up to complete required fields.
                    </h3>
                  ) : (
                    ""
                  )}
                </Grid>
                <Grid
                  item
                  xs={12}
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <div
                    style={{
                      backgroundColor: "#6C0D0D",
                      padding: "14px 14px",
                      marginBottom: "100px",
                    }}
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
                      type="submit"
                      onClick={() => {
                        firstSubmitCheck();
                        trim();
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                </Grid>
              </Grid>
              {/* </form> */}
            </ValidatorForm>
          </div>
        )}
      </Container>
    </>
  );
};

export default Aesthetics;
