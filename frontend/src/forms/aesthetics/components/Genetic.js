import React from "react";
import {
  Grid,
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import { TextValidator } from "react-material-ui-form-validator";

const Genetic = (props) => {
  const fontSize = 19;
  return (
    <>
      <Grid item xs={12}>
        <h2 style={{ marginBottom: 0 }}>GENETIC HISTORY</h2>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12}>
        <TextValidator
          fullWidth
          label="What is your ethnic background?"
          onChange={props.onInputChange}
          name="ethnic"
          value={props.state.ethnic}
          validators={["minStringLength:0", "maxStringLength:20"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6}>
        <p>Natural eye color</p>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="position"
            defaultValue="top"
            name="eyecolor"
            value={props.state.eyecolor}
            onChange={props.onInputChange}
          >
            <FormControlLabel
              value="Light blue/green/grey"
              control={<Radio color="primary" />}
              label="Light blue/green/grey"
            />
            <FormControlLabel
              value="Green/grey"
              control={<Radio color="primary" />}
              label="Green/grey"
            />
            <FormControlLabel
              value="Blue"
              control={<Radio color="primary" />}
              label="Blue"
            />
            <FormControlLabel
              value="Brown/hazel"
              control={<Radio color="primary" />}
              label="Brown/hazel"
            />
            <FormControlLabel
              value="Dark brown/black"
              control={<Radio color="primary" />}
              label="Dark brown/black"
            />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6}>
        <p>Hair color</p>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="position"
            defaultValue="top"
            name="haircolor"
            value={props.state.haircolor}
            onChange={props.onInputChange}
          >
            <FormControlLabel
              value="Sandy/Red"
              control={<Radio color="primary" />}
              label="Sandy/Red"
            />
            <FormControlLabel
              value="Blonde"
              control={<Radio color="primary" />}
              label="Blonde"
            />
            <FormControlLabel
              value="Chestnut/dark blonde"
              control={<Radio color="primary" />}
              label="Chestnut/dark blonde"
            />
            <FormControlLabel
              value="Dark brown"
              control={<Radio color="primary" />}
              label="Dark brown"
            />
            <FormControlLabel
              value="Black"
              control={<Radio color="primary" />}
              label="Black"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12} container>
        <Grid item xs={12} sm={12} lg={7}>
          <h3>
            Periodically we run specials on Botox and Dermal Filler injections.
            Would you like to be contacted by email regarding these promotions?
          </h3>
        </Grid>

        <Grid xs={12} sm={12} lg={3}>
          <Grid className="yesno">
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="position"
                name="promotions"
                defaultValue="top"
                value={props.state.promotions}
                onChange={props.onInputChange}
              >
                <FormControlLabel
                  value="Yes"
                  control={<Radio color="primary" />}
                  label="Yes"
                />

                <FormControlLabel
                  value="No"
                  control={<Radio color="primary" />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        {props.state.promotions.length < 1 && props.firstSubmit === true ? (
          <p className="error">Please select "yes" or "no".</p>
        ) : (
          ""
        )}
      </Grid>

      <Grid item xs={12} sm={12} container>
        <Grid xs={12} sm={12} lg={7}>
          <h3>
            Would you like to be contacted by our Clinical Skin Care Therarpist
            regarding assistance with your skin care?
          </h3>
        </Grid>

        <Grid xs={12} sm={12} lg={3}>
          <Grid className="yesno">
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="position"
                name="skinCare"
                defaultValue="top"
                value={props.state.skinCare}
                onChange={props.onInputChange}
              >
                <FormControlLabel
                  value="Yes"
                  control={<Radio color="primary" />}
                  label="Yes"
                />

                <FormControlLabel
                  value="No"
                  control={<Radio color="primary" />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        {props.state.skinCare.length < 1 && props.firstSubmit === true ? (
          <p className="error">Please select "yes" or "no".</p>
        ) : (
          ""
        )}
      </Grid>

      <Grid item lg={12}>
        <h3>CONSENT</h3>
        <p>
          I agree that the information provided on my Medical Aesthetics
          Consultation Form is complete and accurate to the best of my
          knowledge. I realize that full and unqualified disclosure reduces risk
          of mishap or injury and is key to the success and safety of my
          treatment. I also agree to inform my Medical Aesthetician of any
          changes to my health status or other information provided here. I
          understand that strict compliance with the instructions of my Medical
          Aesthetician will provide me the greatest likelihood of satisfactory
          results.
        </p>
      </Grid>
    </>
  );
};

export default Genetic;
