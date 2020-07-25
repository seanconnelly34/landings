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

const MedicalHistory = (props) => {
  const fontSize = 19;
  return (
    <>
      <Grid item xs={12} sm={12}>
        <h2 style={{ marginBottom: 0 }}>MEDICAL HISTORY:</h2>
      </Grid>

      <Grid item xs={12} sm={12}>
        <TextValidator
          fullWidth
          label="Allergies (systemic or topical)"
          onChange={props.onInputChange}
          name="allergies"
          value={props.state.allergies}
          validators={["minStringLength:0", "maxStringLength:50"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={12} container>
        <TextValidator
          fullWidth
          label="Current Medications"
          onChange={props.onInputChange}
          name="currentMeds"
          value={props.state.currentMeds}
          validators={["minStringLength:0", "maxStringLength:50"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <h3>Previous surgeries (include dates)</h3>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="1."
          onChange={props.onInputChange}
          name="prevSurg1"
          value={props.state.prevSurg1}
          validators={["minStringLength:0", "maxStringLength:60"]}
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
          name="prevSurg2"
          value={props.state.prevSurg2}
          validators={["minStringLength:0", "maxStringLength:60"]}
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
          name="prevSurg3"
          value={props.state.prevSurg3}
          validators={["minStringLength:0", "maxStringLength:60"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="4."
          onChange={props.onInputChange}
          name="prevSurg4"
          value={props.state.prevSurg4}
          validators={["minStringLength:0", "maxStringLength:60"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={12} container>
        <Grid>
          <h3>Do you have/had any skin cancer?</h3>
        </Grid>
        <Grid className="yesno">
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="position"
              defaultValue="top"
              name="skinCancer"
              value={props.state.skinCancer}
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
          {props.state.skinCancer.length < 1 && props.firstSubmit === true ? (
            <p className="error">Please select "yes" or "no".</p>
          ) : (
            ""
          )}
        </Grid>
        <TextValidator
          fullWidth
          label="If yes, when?"
          onChange={props.onInputChange}
          name="cancerWhen"
          value={props.state.cancerWhen}
          validators={["minStringLength:0", "maxStringLength:25"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>

      <Grid item xs={12} sm={12} md={3} lg={3}>
        <h3>What type?</h3>
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={3}>
        <FormControl component="fieldset" fullWidth>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value="Basal Cell"
              control={
                <Checkbox
                  checked={props.state.cancerType1}
                  color="primary"
                  onChange={props.onCheck}
                  name="cancerType1"
                />
              }
              label="Basal Cell"
              labelPlacement="end"
            />
          </Grid>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} md={3} lg={3}>
        <FormControl component="fieldset" fullWidth>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value="Squamous Cell"
              control={
                <Checkbox
                  checked={props.state.cancerType2}
                  color="primary"
                  onChange={props.onCheck}
                  name="cancerType2"
                />
              }
              label="Squamous Cell"
              labelPlacement="end"
            />
          </Grid>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={3}>
        <FormControl component="fieldset" fullWidth>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value="Melanoma"
              control={
                <Checkbox
                  checked={props.state.cancerType3}
                  color="primary"
                  onChange={props.onCheck}
                  name="cancerType3"
                />
              }
              label="Melanoma"
              labelPlacement="end"
            />
          </Grid>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12}>
        <h3>Do you have any of the following?</h3>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <FormControl component="fieldset" fullWidth>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.tmj}
              control={
                <Checkbox
                  checked={props.state.tmj}
                  color="primary"
                  onChange={props.onCheck}
                  name="tmj"
                />
              }
              label="TMJ"
              labelPlacement="end"
            />
          </Grid>

          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.constipation}
              control={
                <Checkbox
                  checked={props.state.constipation}
                  color="primary"
                  onChange={props.onCheck}
                  name="constipation"
                />
              }
              label="Chronic Constipation"
              labelPlacement="end"
            />
          </Grid>

          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.crohns}
              control={
                <Checkbox
                  checked={props.state.crohns}
                  color="primary"
                  onChange={props.onCheck}
                  name="crohns"
                />
              }
              label="Crohn's/IBS"
              labelPlacement="end"
            />
          </Grid>

          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.heartDisease}
              control={
                <Checkbox
                  checked={props.state.heartDisease}
                  color="primary"
                  onChange={props.onCheck}
                  name="heartDisease"
                />
              }
              label="Heart Disease"
              labelPlacement="end"
            />
          </Grid>

          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.contactLenses}
              control={
                <Checkbox
                  checked={props.state.contactLenses}
                  color="primary"
                  onChange={props.onCheck}
                  name="contactLenses"
                />
              }
              label="Contact Lenses"
              labelPlacement="end"
            />
          </Grid>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.hearingAids}
              control={
                <Checkbox
                  checked={props.state.hearingAids}
                  color="primary"
                  onChange={props.onCheck}
                  name="hearingAids"
                />
              }
              label="Hearing Aids"
              labelPlacement="end"
            />
          </Grid>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} md={4} lg={4}>
        <FormControl component="fieldset" fullWidth>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.anxiety}
              control={
                <Checkbox
                  checked={props.state.anxiety}
                  color="primary"
                  onChange={props.onCheck}
                  name="anxiety"
                />
              }
              label="Anxiety/Depression"
              labelPlacement="end"
            />
          </Grid>

          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.ocd}
              control={
                <Checkbox
                  checked={props.state.ocd}
                  color="primary"
                  onChange={props.onCheck}
                  name="ocd"
                />
              }
              label="OCD"
              labelPlacement="end"
            />
          </Grid>

          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.cancer}
              control={
                <Checkbox
                  checked={props.state.cancer}
                  color="primary"
                  onChange={props.onCheck}
                  name="cancer"
                />
              }
              label="Cancer"
              labelPlacement="end"
            />
          </Grid>

          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.diabetes}
              control={
                <Checkbox
                  checked={props.state.diabetes}
                  color="primary"
                  onChange={props.onCheck}
                  name="diabetes"
                />
              }
              label="Diabetes"
              labelPlacement="end"
            />
          </Grid>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.epilepsy}
              control={
                <Checkbox
                  checked={props.state.epilepsy}
                  color="primary"
                  onChange={props.onCheck}
                  name="epilepsy"
                />
              }
              label="Epilepsy"
              labelPlacement="end"
            />
          </Grid>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <FormControl component="fieldset" fullWidth>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.hep}
              control={
                <Checkbox
                  checked={props.state.hep}
                  color="primary"
                  onChange={props.onCheck}
                  name="hep"
                />
              }
              label="Hepatitis B/C"
              labelPlacement="end"
            />
          </Grid>

          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.hiv}
              control={
                <Checkbox
                  checked={props.state.hiv}
                  color="primary"
                  onChange={props.onCheck}
                  name="hiv"
                />
              }
              label="HIV"
              labelPlacement="end"
            />
          </Grid>

          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.lupus}
              control={
                <Checkbox
                  checked={props.state.lupus}
                  color="primary"
                  onChange={props.onCheck}
                  name="lupus"
                />
              }
              label="Lupus"
              labelPlacement="end"
            />
          </Grid>

          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.thyroid}
              control={
                <Checkbox
                  checked={props.state.thyroid}
                  color="primary"
                  onChange={props.onCheck}
                  name="thyroid"
                />
              }
              label="Thyroid Disorder"
              labelPlacement="end"
            />
          </Grid>

          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.herpes}
              control={
                <Checkbox
                  checked={props.state.herpes}
                  color="primary"
                  onChange={props.onCheck}
                  name="herpes"
                />
              }
              label="Herpes Simplex (Cold Sores)"
              labelPlacement="end"
            />
          </Grid>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12}>
        <h2 style={{ marginBottom: 0 }}>WOMEN:</h2>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <TextValidator
          fullWidth
          label="Birth Control (type)"
          onChange={props.onInputChange}
          name="birthControl"
          value={props.state.birthControl}
          validators={["minStringLength:0", "maxStringLength:30"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6}>
        <TextValidator
          fullWidth
          label="For how long?"
          onChange={props.onInputChange}
          name="birthLong"
          value={props.state.birthLong}
          validators={["minStringLength:0", "maxStringLength:30"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6}>
        <FormControl component="fieldset" fullWidth>
          <Grid xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.menopause}
              control={
                <Checkbox
                  checked={props.state.menopause}
                  color="primary"
                  onChange={props.onCheck}
                  name="menopause"
                />
              }
              label="Menopause"
              labelPlacement="end"
            />
          </Grid>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.preg}
              control={
                <Checkbox
                  checked={props.state.preg}
                  color="primary"
                  onChange={props.onCheck}
                  name="preg"
                />
              }
              label="Pregnant"
              labelPlacement="end"
            />
          </Grid>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.breastfeeding}
              control={
                <Checkbox
                  checked={props.state.breastfeeding}
                  color="primary"
                  onChange={props.onCheck}
                  name="breastfeeding"
                />
              }
              label="Breastfeeding"
              labelPlacement="end"
            />
          </Grid>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6}>
        <FormControl component="fieldset" fullWidth>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.ovaries}
              control={
                <Checkbox
                  checked={props.state.ovaries}
                  color="primary"
                  onChange={props.onCheck}
                  name="ovaries"
                />
              }
              label="Polycystic Ovaries"
              labelPlacement="end"
            />
          </Grid>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.hormone}
              control={
                <Checkbox
                  checked={props.state.hormone}
                  color="primary"
                  onChange={props.onCheck}
                  name="hormone"
                />
              }
              label="Hormone Replacement Therapy"
              labelPlacement="end"
            />
          </Grid>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} className="checkBoxes">
        <FormControlLabel
          value={props.state.hyster}
          control={
            <Checkbox
              checked={props.state.hyster}
              color="primary"
              onChange={props.onCheck}
              name="hyster"
            />
          }
          label="Hysterectomy"
          labelPlacement="end"
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <TextValidator
          fullWidth
          label="When was your hysterectomy?"
          onChange={props.onInputChange}
          name="hysterWhen"
          value={props.state.hysterWhen}
          validators={["minStringLength:0", "maxStringLength:25"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>

      <Grid item xs={12} sm={12}>
        <h2 style={{ marginBottom: 0 }}>COSMETIC MEDICAL HISTORY:</h2>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <TextValidator
          fullWidth
          label="Dermatologist"
          onChange={props.onInputChange}
          name="derma"
          value={props.state.derma}
          validators={["minStringLength:0", "maxStringLength:30"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <TextValidator
          fullWidth
          label="Reason for treatment?"
          onChange={props.onInputChange}
          name="dermaReason"
          value={props.state.dermaReason}
          validators={["minStringLength:0", "maxStringLength:30"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>

      <Grid item xs={12} sm={12}>
        <h3>Do you or have you used the following?</h3>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl component="fieldset" fullWidth>
          <Grid container>
            <Grid item xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.accutane}
                control={
                  <Checkbox
                    checked={props.state.accutane}
                    color="primary"
                    onChange={props.onCheck}
                    name="accutane"
                  />
                }
                label="Accutane"
                labelPlacement="end"
              />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.anitbiotics}
                control={
                  <Checkbox
                    checked={props.state.anitbiotics}
                    color="primary"
                    onChange={props.onCheck}
                    name="anitbiotics"
                  />
                }
                label="Oral Antibiotics"
                labelPlacement="end"
              />
            </Grid>
          </Grid>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={6}>
        <FormControl component="fieldset" fullWidth>
          <Grid container>
            <Grid item xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.retin}
                control={
                  <Checkbox
                    checked={props.state.retin}
                    color="primary"
                    onChange={props.onCheck}
                    name="retin"
                  />
                }
                label="Retin-A"
                labelPlacement="end"
              />
            </Grid>
            <Grid item xs={7} sm={7}>
              <TextValidator
                fullWidth
                label="Strength %"
                onChange={props.onInputChange}
                name="retinStrength"
                value={props.state.retinStrength}
                validators={["minStringLength:0", "maxStringLength:20"]}
                errorMessages={["This field is required", "Too long"]}
                inputProps={{ style: { fontSize: fontSize } }}
                InputLabelProps={{ style: { fontSize: fontSize } }}
              />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.hydro}
                control={
                  <Checkbox
                    checked={props.state.hydro}
                    color="primary"
                    onChange={props.onCheck}
                    name="hydro"
                  />
                }
                label="Hydrocortisone"
                labelPlacement="end"
              />
            </Grid>
            <Grid item xs={7} sm={7}>
              <TextValidator
                fullWidth
                label="Strength %"
                onChange={props.onInputChange}
                name="hydroStrength"
                value={props.state.hydroStrength}
                validators={["minStringLength:0", "maxStringLength:20"]}
                errorMessages={["This field is required", "Too long"]}
                inputProps={{ style: { fontSize: fontSize } }}
                InputLabelProps={{ style: { fontSize: fontSize } }}
              />
            </Grid>
          </Grid>
        </FormControl>
      </Grid>

      <Grid item lg={12} sm={12} xs={12}>
        <TextValidator
          fullWidth
          label="How long have you used these medications?"
          onChange={props.onInputChange}
          name="medLength"
          value={props.state.medLength}
          validators={["minStringLength:0", "maxStringLength:20"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>

      <Grid item xs={12} sm={12}>
        <h3>Injections:</h3>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <FormControl component="fieldset" fullWidth>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.botox}
              control={
                <Checkbox
                  checked={props.state.botox}
                  color="primary"
                  onChange={props.onCheck}
                  name="botox"
                />
              }
              label="Botox"
              labelPlacement="end"
            />
          </Grid>

          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.resty}
              control={
                <Checkbox
                  checked={props.state.resty}
                  color="primary"
                  onChange={props.onCheck}
                  name="resty"
                />
              }
              label="Restylane/Perlane"
              labelPlacement="end"
            />
          </Grid>

          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.artecoll}
              control={
                <Checkbox
                  checked={props.state.artecoll}
                  color="primary"
                  onChange={props.onCheck}
                  name="artecoll"
                />
              }
              label="Artecoll"
              labelPlacement="end"
            />
          </Grid>

          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.laserSurface}
              control={
                <Checkbox
                  checked={props.state.laserSurface}
                  color="primary"
                  onChange={props.onCheck}
                  name="laserSurface"
                />
              }
              label="Laser Resurfacing"
              labelPlacement="end"
            />
          </Grid>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <FormControl component="fieldset" fullWidth>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.laserRemove}
              control={
                <Checkbox
                  checked={props.state.laserRemove}
                  color="primary"
                  onChange={props.onCheck}
                  name="laserRemove"
                />
              }
              label="Laser/IPL Hair Removal"
              labelPlacement="end"
            />
          </Grid>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.thermage}
              control={
                <Checkbox
                  checked={props.state.thermage}
                  color="primary"
                  onChange={props.onCheck}
                  name="thermage"
                />
              }
              label="Thermage"
              labelPlacement="end"
            />
          </Grid>

          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.ipl}
              control={
                <Checkbox
                  checked={props.state.ipl}
                  color="primary"
                  onChange={props.onCheck}
                  name="ipl"
                />
              }
              label="IPL/Sclerotherapy (for veins)"
              labelPlacement="end"
            />
          </Grid>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6}>
        <TextValidator
          fullWidth
          label="What area?"
          onChange={props.onInputChange}
          name="injectAreas"
          value={props.state.injectAreas}
          validators={["minStringLength:0", "maxStringLength:30"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <TextValidator
          fullWidth
          label="Where you happy with results?"
          onChange={props.onInputChange}
          name="injectHappy"
          value={props.state.injectHappy}
          validators={["minStringLength:0", "maxStringLength:30"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6}>
        <FormControl component="fieldset" fullWidth>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.facials}
              control={
                <Checkbox
                  checked={props.state.facials}
                  color="primary"
                  onChange={props.onCheck}
                  name="facials"
                />
              }
              label="Facials"
              labelPlacement="end"
            />
          </Grid>

          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.microderm}
              control={
                <Checkbox
                  checked={props.state.microderm}
                  color="primary"
                  onChange={props.onCheck}
                  name="microderm"
                />
              }
              label="Microdermabraison"
              labelPlacement="end"
            />
          </Grid>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.chempeel}
              control={
                <Checkbox
                  checked={props.state.chempeel}
                  color="primary"
                  onChange={props.onCheck}
                  name="chempeel"
                />
              }
              label="Chemical Peels"
              labelPlacement="end"
            />
          </Grid>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <FormControl component="fieldset" fullWidth>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.lacticPeel}
              control={
                <Checkbox
                  checked={props.state.lacticPeel}
                  color="primary"
                  onChange={props.onCheck}
                  name="lacticPeel"
                />
              }
              label="Glycolic/Lactic Acid Peels"
              labelPlacement="end"
            />
          </Grid>
          <Grid item xs={12} sm={12} className="checkBoxes">
            <FormControlLabel
              value={props.state.salicPeel}
              control={
                <Checkbox
                  checked={props.state.salicPeel}
                  color="primary"
                  onChange={props.onCheck}
                  name="salicPeel"
                />
              }
              label="Salicylic Acid Peels"
              labelPlacement="end"
            />
          </Grid>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6}>
        <TextValidator
          fullWidth
          label="Last Treatment?"
          onChange={props.onInputChange}
          name="lastTreat"
          value={props.state.lastTreat}
          validators={["minStringLength:0", "maxStringLength:30"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <TextValidator
          fullWidth
          label="Where you happy with results?"
          onChange={props.onInputChange}
          name="peelHapppy"
          value={props.state.peelHapppy}
          validators={["minStringLength:0", "maxStringLength:30"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
    </>
  );
};

export default MedicalHistory;
