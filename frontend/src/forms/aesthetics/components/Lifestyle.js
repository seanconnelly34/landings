import React from "react";
import {
  Grid,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox,
} from "@material-ui/core";

import { TextValidator } from "react-material-ui-form-validator";

const Lifestyle = (props) => {
  const fontSize = 19;
  return (
    <>
      <Grid item xs={12} sm={12}>
        <h2 style={{ marginBottom: 0 }}>LIFESTYLE:</h2>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl component="fieldset" fullWidth>
          <Grid container>
            <Grid item xs={7} sm={7}>
              <TextValidator
                fullWidth
                label="Occupation"
                onChange={props.onInputChange}
                name="occupation"
                value={props.state.occupation}
                validators={["minStringLength:0", "maxStringLength:20"]}
                errorMessages={["This field is required", "Too long"]}
                inputProps={{ style: { fontSize: fontSize } }}
                InputLabelProps={{ style: { fontSize: fontSize } }}
              />
            </Grid>
            <Grid item xs={5} sm={5} className="checkBoxes">
              <FormControl component="fieldset">
                <RadioGroup
                  row
                  aria-label="position"
                  defaultValue="top"
                  name="fullpart"
                  value={props.state.fullpart}
                  onChange={props.onInputChange}
                >
                  <FormControlLabel
                    value="Full Time"
                    control={<Radio color="primary" />}
                    label="F/T"
                  />

                  <FormControlLabel
                    value="Part Time"
                    control={<Radio color="primary" />}
                    label="P/T"
                  />
                </RadioGroup>
              </FormControl>
              {props.state.fullpart.length < 1 && props.firstSubmit === true ? (
                <p className="error">Please select "yes" or "no".</p>
              ) : (
                ""
              )}
            </Grid>
          </Grid>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="Children? (ages)"
          onChange={props.onInputChange}
          name="children"
          value={props.state.children}
          validators={["minStringLength:0", "maxStringLength:20"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>

      <Grid item xs={12} sm={12} container>
        <Grid>
          <h3>Stress level</h3>
        </Grid>
        <Grid className="yesno">
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="position"
              defaultValue="top"
              name="stress"
              value={props.state.stress}
              onChange={props.onInputChange}
            >
              <FormControlLabel
                value="High"
                control={<Radio color="primary" />}
                label="High"
              />

              <FormControlLabel
                value="Moderate"
                control={<Radio color="primary" />}
                label="Moderate"
              />
              <FormControlLabel
                value="Low"
                control={<Radio color="primary" />}
                label="Low"
              />
            </RadioGroup>
          </FormControl>
          {props.state.stress.length < 1 && props.firstSubmit === true ? (
            <p className="error">Please select.</p>
          ) : (
            ""
          )}
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} container>
        <Grid>
          <h3>Do you handle stress well?</h3>
        </Grid>
        <Grid className="yesno">
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="position"
              defaultValue="top"
              name="stressWell"
              value={props.state.stressWell}
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
          {props.state.stressWell.length < 1 && props.firstSubmit === true ? (
            <p className="error">Please select.</p>
          ) : (
            ""
          )}
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} container>
        <Grid>
          <h3>Sleep pattern</h3>
        </Grid>
        <Grid className="yesno">
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="position"
              defaultValue="top"
              name="sleepHours"
              value={props.state.sleepHours}
              onChange={props.onInputChange}
            >
              <FormControlLabel
                value="8+ hrs"
                control={<Radio color="primary" />}
                label="8+ hrs"
              />

              <FormControlLabel
                value="4-6 hrs"
                control={<Radio color="primary" />}
                label="4-6 hrs"
              />
              <FormControlLabel
                value="Less than 4 hrs"
                control={<Radio color="primary" />}
                label="Less than 4 hrs"
              />
            </RadioGroup>
          </FormControl>
          {props.state.sleepHours.length < 1 && props.firstSubmit === true ? (
            <p className="error">Please select.</p>
          ) : (
            ""
          )}
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} container>
        <Grid>
          <h3>Diet</h3>
        </Grid>
        <Grid className="yesno">
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="position"
              defaultValue="top"
              name="diet"
              value={props.state.diet}
              onChange={props.onInputChange}
            >
              <FormControlLabel
                value="Healthy"
                control={<Radio color="primary" />}
                label="Healthy"
              />

              <FormControlLabel
                value="Average"
                control={<Radio color="primary" />}
                label="Average"
              />
              <FormControlLabel
                value="Poor"
                control={<Radio color="primary" />}
                label="Poor"
              />
              <FormControlLabel
                value="Vegetarian/Vegan"
                control={<Radio color="primary" />}
                label="Vegetarian/Vegan"
              />
              <FormControlLabel
                value="Restricted/Diabetic"
                control={<Radio color="primary" />}
                label="Restricted/Diabetic"
              />
            </RadioGroup>
          </FormControl>
          {props.state.diet.length < 1 && props.firstSubmit === true ? (
            <p className="error">Please select.</p>
          ) : (
            ""
          )}
        </Grid>
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="Dietary supplements/vitamins:"
          onChange={props.onInputChange}
          name="vitamins"
          value={props.state.vitamins}
          validators={["minStringLength:0", "maxStringLength:20"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="# Coffee/day:"
          onChange={props.onInputChange}
          name="coffee"
          value={props.state.coffee}
          validators={["minStringLength:0", "maxStringLength:20"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="# Water/day:"
          onChange={props.onInputChange}
          name="water"
          value={props.state.water}
          validators={["minStringLength:0", "maxStringLength:20"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="# Alcohol/day:"
          onChange={props.onInputChange}
          name="alcohol"
          value={props.state.alcohol}
          validators={["minStringLength:0", "maxStringLength:20"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="# Cigarettes/day:"
          onChange={props.onInputChange}
          name="cigs"
          value={props.state.cigs}
          validators={["minStringLength:0", "maxStringLength:20"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>

      <Grid item xs={12} sm={6}></Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <h3>Exercise:</h3>
        <FormControl component="fieldset" fullWidth>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <FormControlLabel
                value={props.state.cardio}
                control={
                  <Checkbox
                    checked={props.state.cardio}
                    color="primary"
                    onChange={props.onCheck}
                    name="cardio"
                  />
                }
                label="Cardio"
                labelPlacement="end"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <FormControlLabel
                value={props.state.weights}
                control={
                  <Checkbox
                    checked={props.state.weights}
                    color="primary"
                    onChange={props.onCheck}
                    name="weights"
                  />
                }
                label="Weights"
                labelPlacement="end"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <FormControlLabel
                value={props.state.stretch}
                control={
                  <Checkbox
                    checked={props.state.stretch}
                    color="primary"
                    onChange={props.onCheck}
                    name="stretch"
                  />
                }
                label="Stretching"
                labelPlacement="end"
              />
            </Grid>
          </Grid>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6}>
        <h3>Exercise how often?</h3>
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="position"
            defaultValue="top"
            name="exerciseOften"
            value={props.state.exerciseOften}
            onChange={props.onInputChange}
          >
            <Grid item xs={12} sm={12} className="checkBoxes">
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <FormControlLabel
                  value="< 2 x week"
                  control={<Radio color="primary" />}
                  label="< 2 x week"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <FormControlLabel
                  value="2-3 X week"
                  control={<Radio color="primary" />}
                  label="2-3 X week"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <FormControlLabel
                  value="< 3 x week"
                  control={<Radio color="primary" />}
                  label="< 3 x week"
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>
      </Grid>
    </>
  );
};

export default Lifestyle;
