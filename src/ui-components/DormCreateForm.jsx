/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Dorm } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function DormCreateForm(props) {
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
    name: "",
    ones: "",
    twos: "",
    threes: "",
    fours: "",
    fives: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [ones, setOnes] = React.useState(initialValues.ones);
  const [twos, setTwos] = React.useState(initialValues.twos);
  const [threes, setThrees] = React.useState(initialValues.threes);
  const [fours, setFours] = React.useState(initialValues.fours);
  const [fives, setFives] = React.useState(initialValues.fives);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setOnes(initialValues.ones);
    setTwos(initialValues.twos);
    setThrees(initialValues.threes);
    setFours(initialValues.fours);
    setFives(initialValues.fives);
    setErrors({});
  };
  const validations = {
    name: [],
    ones: [],
    twos: [],
    threes: [],
    fours: [],
    fives: [],
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
          name,
          ones,
          twos,
          threes,
          fours,
          fives,
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
          await DataStore.save(new Dorm(modelFields));
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
      {...getOverrideProps(overrides, "DormCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              ones,
              twos,
              threes,
              fours,
              fives,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Ones"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ones}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              ones: value,
              twos,
              threes,
              fours,
              fives,
            };
            const result = onChange(modelFields);
            value = result?.ones ?? value;
          }
          if (errors.ones?.hasError) {
            runValidationTasks("ones", value);
          }
          setOnes(value);
        }}
        onBlur={() => runValidationTasks("ones", ones)}
        errorMessage={errors.ones?.errorMessage}
        hasError={errors.ones?.hasError}
        {...getOverrideProps(overrides, "ones")}
      ></TextField>
      <TextField
        label="Twos"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={twos}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              ones,
              twos: value,
              threes,
              fours,
              fives,
            };
            const result = onChange(modelFields);
            value = result?.twos ?? value;
          }
          if (errors.twos?.hasError) {
            runValidationTasks("twos", value);
          }
          setTwos(value);
        }}
        onBlur={() => runValidationTasks("twos", twos)}
        errorMessage={errors.twos?.errorMessage}
        hasError={errors.twos?.hasError}
        {...getOverrideProps(overrides, "twos")}
      ></TextField>
      <TextField
        label="Threes"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={threes}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              ones,
              twos,
              threes: value,
              fours,
              fives,
            };
            const result = onChange(modelFields);
            value = result?.threes ?? value;
          }
          if (errors.threes?.hasError) {
            runValidationTasks("threes", value);
          }
          setThrees(value);
        }}
        onBlur={() => runValidationTasks("threes", threes)}
        errorMessage={errors.threes?.errorMessage}
        hasError={errors.threes?.hasError}
        {...getOverrideProps(overrides, "threes")}
      ></TextField>
      <TextField
        label="Fours"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={fours}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              ones,
              twos,
              threes,
              fours: value,
              fives,
            };
            const result = onChange(modelFields);
            value = result?.fours ?? value;
          }
          if (errors.fours?.hasError) {
            runValidationTasks("fours", value);
          }
          setFours(value);
        }}
        onBlur={() => runValidationTasks("fours", fours)}
        errorMessage={errors.fours?.errorMessage}
        hasError={errors.fours?.hasError}
        {...getOverrideProps(overrides, "fours")}
      ></TextField>
      <TextField
        label="Fives"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={fives}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              ones,
              twos,
              threes,
              fours,
              fives: value,
            };
            const result = onChange(modelFields);
            value = result?.fives ?? value;
          }
          if (errors.fives?.hasError) {
            runValidationTasks("fives", value);
          }
          setFives(value);
        }}
        onBlur={() => runValidationTasks("fives", fives)}
        errorMessage={errors.fives?.errorMessage}
        hasError={errors.fives?.hasError}
        {...getOverrideProps(overrides, "fives")}
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
