import React from "react";
import { Grid } from "@material-ui/core";
import { TextValidator } from "react-material-ui-form-validator";
import NewDate from "../../../utils/NewDate";
const PersonalInfo = (props) => {
  const fontSize = 19;
  return (
    <>
      <Grid item xs={12} sm={12}>
        <h1 style={{ marginBottom: 0 }}>Personal Info</h1>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          disabled
          fullWidth
          label="Date"
          onChange={props.onInputChange}
          placeholder={NewDate()}
          name="date"
          value={NewDate()}
          validators={["minStringLength:2", "maxStringLength:40"]}
          errorMessages={["This field is required", "Date is not valid"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="Name"
          onChange={props.onInputChange}
          name="name"
          value={props.state.name}
          validators={["minStringLength:2", "maxStringLength:25"]}
          errorMessages={["This field is required", "Name is not valid"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="Date of Birth (YYYY/MM/DD)"
          onChange={props.onInputChange}
          name="dob"
          placeholder="YYYY/MM/DD"
          value={props.state.dob}
          validators={["minStringLength:10", "maxStringLength:10"]}
          errorMessages={[
            "This field is required",
            "Date of birth is not valid",
          ]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="Street Address"
          onChange={props.onInputChange}
          name="streetaddress"
          value={props.state.streetaddress}
          validators={["minStringLength:5", "maxStringLength:30"]}
          errorMessages={["Enter your address", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="City"
          onChange={props.onInputChange}
          name="city"
          value={props.state.city}
          validators={["minStringLength:4", "maxStringLength:30"]}
          errorMessages={["Enter your city", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="Province"
          onChange={props.onInputChange}
          name="province"
          value={props.state.province}
          validators={["minStringLength:2", "maxStringLength:30"]}
          errorMessages={["Enter your province", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="Postal Code"
          onChange={props.onInputChange}
          name="postal"
          value={props.state.postal}
          validators={["minStringLength:5", "maxStringLength:9"]}
          errorMessages={["Enter your postal code", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="Phone"
          onChange={props.onInputChange}
          name="cellphone"
          value={props.state.cellphone}
          validators={["minStringLength:9", "maxStringLength:16"]}
          errorMessages={["Enter a valid phone number", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
    </>
  );
};

export default PersonalInfo;
