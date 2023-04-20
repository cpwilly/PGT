/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Review } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ReviewCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Description: "",
    Date: "",
    WouldRoomAgain: false,
    Rating: "",
    Bathroom: "",
    numResidents: "",
    numLikes: "",
    accountEmail: "",
  };
  const [Description, setDescription] = React.useState(
    initialValues.Description
  );
  const [Date, setDate] = React.useState(initialValues.Date);
  const [WouldRoomAgain, setWouldRoomAgain] = React.useState(
    initialValues.WouldRoomAgain
  );
  const [Rating, setRating] = React.useState(initialValues.Rating);
  const [Bathroom, setBathroom] = React.useState(initialValues.Bathroom);
  const [numResidents, setNumResidents] = React.useState(
    initialValues.numResidents
  );
  const [numLikes, setNumLikes] = React.useState(initialValues.numLikes);
  const [accountEmail, setAccountEmail] = React.useState(
    initialValues.accountEmail
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDescription(initialValues.Description);
    setDate(initialValues.Date);
    setWouldRoomAgain(initialValues.WouldRoomAgain);
    setRating(initialValues.Rating);
    setBathroom(initialValues.Bathroom);
    setNumResidents(initialValues.numResidents);
    setNumLikes(initialValues.numLikes);
    setAccountEmail(initialValues.accountEmail);
    setErrors({});
  };
  const validations = {
    Description: [],
    Date: [],
    WouldRoomAgain: [],
    Rating: [],
    Bathroom: [],
    numResidents: [],
    numLikes: [],
    accountEmail: [{ type: "Email" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Description,
          Date,
          WouldRoomAgain,
          Rating,
          Bathroom,
          numResidents,
          numLikes,
          accountEmail,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Review(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ReviewCreateForm")}
      {...rest}
    >
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={Description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Description: value,
              Date,
              WouldRoomAgain,
              Rating,
              Bathroom,
              numResidents,
              numLikes,
              accountEmail,
            };
            const result = onChange(modelFields);
            value = result?.Description ?? value;
          }
          if (errors.Description?.hasError) {
            runValidationTasks("Description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("Description", Description)}
        errorMessage={errors.Description?.errorMessage}
        hasError={errors.Description?.hasError}
        {...getOverrideProps(overrides, "Description")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Description,
              Date: value,
              WouldRoomAgain,
              Rating,
              Bathroom,
              numResidents,
              numLikes,
              accountEmail,
            };
            const result = onChange(modelFields);
            value = result?.Date ?? value;
          }
          if (errors.Date?.hasError) {
            runValidationTasks("Date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("Date", Date)}
        errorMessage={errors.Date?.errorMessage}
        hasError={errors.Date?.hasError}
        {...getOverrideProps(overrides, "Date")}
      ></TextField>
      <SwitchField
        label="Would room again"
        defaultChecked={false}
        isDisabled={false}
        isChecked={WouldRoomAgain}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Description,
              Date,
              WouldRoomAgain: value,
              Rating,
              Bathroom,
              numResidents,
              numLikes,
              accountEmail,
            };
            const result = onChange(modelFields);
            value = result?.WouldRoomAgain ?? value;
          }
          if (errors.WouldRoomAgain?.hasError) {
            runValidationTasks("WouldRoomAgain", value);
          }
          setWouldRoomAgain(value);
        }}
        onBlur={() => runValidationTasks("WouldRoomAgain", WouldRoomAgain)}
        errorMessage={errors.WouldRoomAgain?.errorMessage}
        hasError={errors.WouldRoomAgain?.hasError}
        {...getOverrideProps(overrides, "WouldRoomAgain")}
      ></SwitchField>
      <TextField
        label="Rating"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Rating}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Description,
              Date,
              WouldRoomAgain,
              Rating: value,
              Bathroom,
              numResidents,
              numLikes,
              accountEmail,
            };
            const result = onChange(modelFields);
            value = result?.Rating ?? value;
          }
          if (errors.Rating?.hasError) {
            runValidationTasks("Rating", value);
          }
          setRating(value);
        }}
        onBlur={() => runValidationTasks("Rating", Rating)}
        errorMessage={errors.Rating?.errorMessage}
        hasError={errors.Rating?.hasError}
        {...getOverrideProps(overrides, "Rating")}
      ></TextField>
      <TextField
        label="Bathroom"
        isRequired={false}
        isReadOnly={false}
        value={Bathroom}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Description,
              Date,
              WouldRoomAgain,
              Rating,
              Bathroom: value,
              numResidents,
              numLikes,
              accountEmail,
            };
            const result = onChange(modelFields);
            value = result?.Bathroom ?? value;
          }
          if (errors.Bathroom?.hasError) {
            runValidationTasks("Bathroom", value);
          }
          setBathroom(value);
        }}
        onBlur={() => runValidationTasks("Bathroom", Bathroom)}
        errorMessage={errors.Bathroom?.errorMessage}
        hasError={errors.Bathroom?.hasError}
        {...getOverrideProps(overrides, "Bathroom")}
      ></TextField>
      <TextField
        label="Num residents"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numResidents}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Description,
              Date,
              WouldRoomAgain,
              Rating,
              Bathroom,
              numResidents: value,
              numLikes,
              accountEmail,
            };
            const result = onChange(modelFields);
            value = result?.numResidents ?? value;
          }
          if (errors.numResidents?.hasError) {
            runValidationTasks("numResidents", value);
          }
          setNumResidents(value);
        }}
        onBlur={() => runValidationTasks("numResidents", numResidents)}
        errorMessage={errors.numResidents?.errorMessage}
        hasError={errors.numResidents?.hasError}
        {...getOverrideProps(overrides, "numResidents")}
      ></TextField>
      <TextField
        label="Num likes"
        isRequired={false}
        isReadOnly={false}
        value={numLikes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Description,
              Date,
              WouldRoomAgain,
              Rating,
              Bathroom,
              numResidents,
              numLikes: value,
              accountEmail,
            };
            const result = onChange(modelFields);
            value = result?.numLikes ?? value;
          }
          if (errors.numLikes?.hasError) {
            runValidationTasks("numLikes", value);
          }
          setNumLikes(value);
        }}
        onBlur={() => runValidationTasks("numLikes", numLikes)}
        errorMessage={errors.numLikes?.errorMessage}
        hasError={errors.numLikes?.hasError}
        {...getOverrideProps(overrides, "numLikes")}
      ></TextField>
      <TextField
        label="Account email"
        isRequired={false}
        isReadOnly={false}
        value={accountEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Description,
              Date,
              WouldRoomAgain,
              Rating,
              Bathroom,
              numResidents,
              numLikes,
              accountEmail: value,
            };
            const result = onChange(modelFields);
            value = result?.accountEmail ?? value;
          }
          if (errors.accountEmail?.hasError) {
            runValidationTasks("accountEmail", value);
          }
          setAccountEmail(value);
        }}
        onBlur={() => runValidationTasks("accountEmail", accountEmail)}
        errorMessage={errors.accountEmail?.errorMessage}
        hasError={errors.accountEmail?.hasError}
        {...getOverrideProps(overrides, "accountEmail")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
