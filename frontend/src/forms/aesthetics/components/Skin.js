import React from "react";
import {
  Grid,
  Checkbox,
  FormControlLabel,
  FormControl,
} from "@material-ui/core";
import { TextValidator } from "react-material-ui-form-validator";

const Skin = (props) => {
  const fontSize = 19;
  return (
    <>
      <Grid item xs={12}>
        <h2>SKIN CONDITIONS</h2>
        <h3 style={{ marginBottom: 0 }}>
          Please indicate any and all skin conditions/concerns:
        </h3>
      </Grid>

      <Grid item xs={12} sm={12} md={4} lg={4}>
        <FormControl component="fieldset" fullWidth>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.acne}
              control={
                <Checkbox
                  checked={props.state.acne}
                  color="primary"
                  onChange={props.onCheck}
                  name="acne"
                />
              }
              label="Acne"
              labelPlacement="end"
            />
          </Grid>

          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.blackheads}
              control={
                <Checkbox
                  checked={props.state.blackheads}
                  color="primary"
                  onChange={props.onCheck}
                  name="blackheads"
                />
              }
              label="Blackheads"
              labelPlacement="end"
            />
          </Grid>

          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.eczema}
              control={
                <Checkbox
                  checked={props.state.eczema}
                  color="primary"
                  onChange={props.onCheck}
                  name="eczema"
                />
              }
              label="Eczema"
              labelPlacement="end"
            />
          </Grid>

          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.whiteheads}
              control={
                <Checkbox
                  checked={props.state.whiteheads}
                  color="primary"
                  onChange={props.onCheck}
                  name="whiteheads"
                />
              }
              label="Milia (whiteheads)"
              labelPlacement="end"
            />
          </Grid>

          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.senskin}
              control={
                <Checkbox
                  checked={props.state.senskin}
                  color="primary"
                  onChange={props.onCheck}
                  name="senskin"
                />
              }
              label="Sensitive Skin"
              labelPlacement="end"
            />
          </Grid>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.pigment}
              control={
                <Checkbox
                  checked={props.state.pigment}
                  color="primary"
                  onChange={props.onCheck}
                  name="pigment"
                />
              }
              label="Uneven Pigment"
              labelPlacement="end"
            />
          </Grid>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.rosacea}
              control={
                <Checkbox
                  checked={props.state.rosacea}
                  color="primary"
                  onChange={props.onCheck}
                  name="rosacea"
                />
              }
              label="Acne Rosacea"
              labelPlacement="end"
            />
          </Grid>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.congskin}
              control={
                <Checkbox
                  checked={props.state.congskin}
                  color="primary"
                  onChange={props.onCheck}
                  name="congskin"
                />
              }
              label="Congested Skin"
              labelPlacement="end"
            />
          </Grid>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.elastic}
              control={
                <Checkbox
                  checked={props.state.elastic}
                  color="primary"
                  onChange={props.onCheck}
                  name="elastic"
                />
              }
              label="Elasticity Loss"
              labelPlacement="end"
            />
          </Grid>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} md={4} lg={4}>
        <FormControl component="fieldset" fullWidth>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.psoriasis}
              control={
                <Checkbox
                  checked={props.state.psoriasis}
                  color="primary"
                  onChange={props.onCheck}
                  name="psoriasis"
                />
              }
              label="Psoriasis"
              labelPlacement="end"
            />
          </Grid>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.sundamage}
              control={
                <Checkbox
                  checked={props.state.sundamage}
                  color="primary"
                  onChange={props.onCheck}
                  name="sundamage"
                />
              }
              label="Sun Damage"
              labelPlacement="end"
            />
          </Grid>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.uneventext}
              control={
                <Checkbox
                  checked={props.state.uneventext}
                  color="primary"
                  onChange={props.onCheck}
                  name="uneventext"
                />
              }
              label="Uneven Texture"
              labelPlacement="end"
            />
          </Grid>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.scars}
              control={
                <Checkbox
                  checked={props.state.scars}
                  color="primary"
                  onChange={props.onCheck}
                  name="scars"
                />
              }
              label="Acne Scars"
              labelPlacement="end"
            />
          </Grid>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.darkCircles}
              control={
                <Checkbox
                  checked={props.state.darkCircles}
                  color="primary"
                  onChange={props.onCheck}
                  name="darkCircles"
                />
              }
              label="Dark Circles"
              labelPlacement="end"
            />
          </Grid>

          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.pores}
              control={
                <Checkbox
                  checked={props.state.pores}
                  color="primary"
                  onChange={props.onCheck}
                  name="pores"
                />
              }
              label="Enlarged Pores"
              labelPlacement="end"
            />
          </Grid>

          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.ros}
              control={
                <Checkbox
                  checked={props.state.ros}
                  color="primary"
                  onChange={props.onCheck}
                  name="ros"
                />
              }
              label="Rosacea"
              labelPlacement="end"
            />
          </Grid>

          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.vitiligo}
              control={
                <Checkbox
                  checked={props.state.vitiligo}
                  color="primary"
                  onChange={props.onCheck}
                  name="vitiligo"
                />
              }
              label="Vitiligo"
              labelPlacement="end"
            />
          </Grid>

          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.aging}
              control={
                <Checkbox
                  checked={props.state.aging}
                  color="primary"
                  onChange={props.onCheck}
                  name="aging"
                />
              }
              label="Aging Skin"
              labelPlacement="end"
            />
          </Grid>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} md={4} lg={4}>
        <FormControl component="fieldset" fullWidth>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.dermatitis}
              control={
                <Checkbox
                  checked={props.state.dermatitis}
                  color="primary"
                  onChange={props.onCheck}
                  name="dermatitis"
                />
              }
              label="Dermatitis"
              labelPlacement="end"
            />
          </Grid>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.freckles}
              control={
                <Checkbox
                  checked={props.state.freckles}
                  color="primary"
                  onChange={props.onCheck}
                  name="freckles"
                />
              }
              label="Freckles/Moles"
              labelPlacement="end"
            />
          </Grid>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.scarsNoAcne}
              control={
                <Checkbox
                  checked={props.state.scarsNoAcne}
                  color="primary"
                  onChange={props.onCheck}
                  name="scarsNoAcne"
                />
              }
              label="Scars (Non-acneic)"
              labelPlacement="end"
            />
          </Grid>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.backne}
              control={
                <Checkbox
                  checked={props.state.backne}
                  color="primary"
                  onChange={props.onCheck}
                  name="backne"
                />
              }
              label="Back/Chest Acne"
              labelPlacement="end"
            />
          </Grid>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.dryskin}
              control={
                <Checkbox
                  checked={props.state.dryskin}
                  color="primary"
                  onChange={props.onCheck}
                  name="dryskin"
                />
              }
              label="Dry Skin"
              labelPlacement="end"
            />
          </Grid>

          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.wrinkles}
              control={
                <Checkbox
                  checked={props.state.wrinkles}
                  color="primary"
                  onChange={props.onCheck}
                  name="wrinkles"
                />
              }
              label="Lines/Wrinkles"
              labelPlacement="end"
            />
          </Grid>

          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.sebhorrea}
              control={
                <Checkbox
                  checked={props.state.sebhorrea}
                  color="primary"
                  onChange={props.onCheck}
                  name="sebhorrea"
                />
              }
              label="Sebhorrea"
              labelPlacement="end"
            />
          </Grid>

          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.puffy}
              control={
                <Checkbox
                  checked={props.state.puffy}
                  color="primary"
                  onChange={props.onCheck}
                  name="puffy"
                />
              }
              label="Under-Eye Puffiness"
              labelPlacement="end"
            />
          </Grid>

          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.capilaries}
              control={
                <Checkbox
                  checked={props.state.capilaries}
                  color="primary"
                  onChange={props.onCheck}
                  name="capilaries"
                />
              }
              label="Telangiectasia (Broken Capilaries)s"
              labelPlacement="end"
            />
          </Grid>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} lg={12}>
        <p>Please list your primary concerns in order of priority</p>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="1."
          onChange={props.onInputChange}
          name="concern1"
          value={props.state.concern1}
          validators={["minStringLength:0", "maxStringLength:20"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="2."
          onChange={props.onInputChange}
          name="concern2"
          value={props.state.concern2}
          validators={["minStringLength:0", "maxStringLength:20"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="3."
          onChange={props.onInputChange}
          name="concern3"
          value={props.state.concern3}
          validators={["minStringLength:0", "maxStringLength:20"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
    </>
  );
};

export default Skin;
