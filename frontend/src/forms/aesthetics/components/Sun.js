import React from "react";
import {
  Grid,
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import { TextValidator } from "react-material-ui-form-validator";

const Sun = (props) => {
  const fontSize = 19;
  return (
    <>
      <Grid item xs={12}>
        <h2 style={{ marginBottom: 0 }}>SUN EXPOSURE/REACTION</h2>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6}>
        <p>How do you react to the sun?</p>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="position"
            defaultValue="top"
            name="sunReact"
            value={props.state.sunReact}
            onChange={props.onInputChange}
          >
            <FormControlLabel
              value="Always burn, never tan"
              control={<Radio color="primary" />}
              label="Always burn, never tan"
            />
            <FormControlLabel
              value="Burn frst, tan with difficulty"
              control={<Radio color="primary" />}
              label="Burn frst, tan with difficulty"
            />
            <FormControlLabel
              value="Burn first, tan with ease"
              control={<Radio color="primary" />}
              label="Burn first, tan with ease"
            />
            <FormControlLabel
              value="Seldom burn, tan with ease"
              control={<Radio color="primary" />}
              label="Seldom burn, tan with ease"
            />
            <FormControlLabel
              value="Never burn, tan with ease"
              control={<Radio color="primary" />}
              label="Never burn, tan with ease"
            />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6}>
        <p>How dark can your skin turn?</p>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="position"
            defaultValue="top"
            name="darkSkin"
            value={props.state.darkSkin}
            onChange={props.onInputChange}
          >
            <FormControlLabel
              value="Never tan, hardly ever"
              control={<Radio color="primary" />}
              label="Never tan, hardly ever"
            />
            <FormControlLabel
              value="Light tan, freckling only"
              control={<Radio color="primary" />}
              label="Light tan, freckling only"
            />
            <FormControlLabel
              value="Medium tan with difficulty"
              control={<Radio color="primary" />}
              label="Medium tan with difficulty"
            />
            <FormControlLabel
              value="Medium tan quickly"
              control={<Radio color="primary" />}
              label="Medium tan quickly"
            />
            <FormControlLabel
              value="Dark brown quickly"
              control={<Radio color="primary" />}
              label="Dark brown quickly"
            />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6}>
        <p>Have you blistered from a sunburn?</p>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="position"
            defaultValue="top"
            name="sunblister"
            value={props.state.sunblister}
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
        <TextValidator
          fullWidth
          label="What area?"
          onChange={props.onInputChange}
          name="blisterArea"
          value={props.state.blisterArea}
          validators={["minStringLength:0", "maxStringLength:20"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6}>
        <p>How do you tan?</p>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="position"
            defaultValue="top"
            name="tanhow"
            value={props.state.tanhow}
            onChange={props.onInputChange}
          >
            <FormControlLabel
              value="Natural"
              control={<Radio color="primary" />}
              label="Natural"
            />
            <FormControlLabel
              value="Tanning Bed"
              control={<Radio color="primary" />}
              label="Tanning Bed"
            />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12}>
        <p>How often do you tan?</p>
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="position"
            defaultValue="top"
            name="tanoften"
            value={props.state.tanoften}
            onChange={props.onInputChange}
          >
            <FormControlLabel
              value="Never/Seldom"
              control={<Radio color="primary" />}
              label="Never/Seldom"
            />
            <FormControlLabel
              value="Sometimes"
              control={<Radio color="primary" />}
              label="Sometimes"
            />
            <FormControlLabel
              value="Often"
              control={<Radio color="primary" />}
              label="Often"
            />
            <FormControlLabel
              value="Year-round"
              control={<Radio color="primary" />}
              label="Year-round"
            />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12}>
        <p>What is your natural non-exposed skin color?</p>
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="position"
            defaultValue="top"
            name="skincolor"
            value={props.state.skincolor}
            onChange={props.onInputChange}
          >
            <FormControlLabel
              value="Reddish"
              control={<Radio color="primary" />}
              label="Reddish"
            />
            <FormControlLabel
              value="Very pale"
              control={<Radio color="primary" />}
              label="Very pale"
            />
            <FormControlLabel
              value="Pale with beige tint"
              control={<Radio color="primary" />}
              label="Pale with beige tint"
            />
            <FormControlLabel
              value="Olive"
              control={<Radio color="primary" />}
              label="Olive"
            />
            <FormControlLabel
              value="Light brown"
              control={<Radio color="primary" />}
              label="Light brown"
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
    </>
  );
};

export default Sun;
