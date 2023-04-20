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
    Name: "",
    numReviews: "",
    ratings: "",
    imageURL: "",
    totalRatings: "",
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [numReviews, setNumReviews] = React.useState(initialValues.numReviews);
  const [ratings, setRatings] = React.useState(initialValues.ratings);
  const [imageURL, setImageURL] = React.useState(initialValues.imageURL);
  const [totalRatings, setTotalRatings] = React.useState(
    initialValues.totalRatings
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.Name);
    setNumReviews(initialValues.numReviews);
    setRatings(initialValues.ratings);
    setImageURL(initialValues.imageURL);
    setTotalRatings(initialValues.totalRatings);
    setErrors({});
  };
  const validations = {
    Name: [],
    numReviews: [],
    ratings: [],
    imageURL: [{ type: "URL" }],
    totalRatings: [],
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
          Name,
          numReviews,
          ratings,
          imageURL,
          totalRatings,
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
        value={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name: value,
              numReviews,
              ratings,
              imageURL,
              totalRatings,
            };
            const result = onChange(modelFields);
            value = result?.Name ?? value;
          }
          if (errors.Name?.hasError) {
            runValidationTasks("Name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("Name", Name)}
        errorMessage={errors.Name?.errorMessage}
        hasError={errors.Name?.hasError}
        {...getOverrideProps(overrides, "Name")}
      ></TextField>
      <TextField
        label="Num reviews"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numReviews}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Name,
              numReviews: value,
              ratings,
              imageURL,
              totalRatings,
            };
            const result = onChange(modelFields);
            value = result?.numReviews ?? value;
          }
          if (errors.numReviews?.hasError) {
            runValidationTasks("numReviews", value);
          }
          setNumReviews(value);
        }}
        onBlur={() => runValidationTasks("numReviews", numReviews)}
        errorMessage={errors.numReviews?.errorMessage}
        hasError={errors.numReviews?.hasError}
        {...getOverrideProps(overrides, "numReviews")}
      ></TextField>
      <TextField
        label="Ratings"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ratings}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Name,
              numReviews,
              ratings: value,
              imageURL,
              totalRatings,
            };
            const result = onChange(modelFields);
            value = result?.ratings ?? value;
          }
          if (errors.ratings?.hasError) {
            runValidationTasks("ratings", value);
          }
          setRatings(value);
        }}
        onBlur={() => runValidationTasks("ratings", ratings)}
        errorMessage={errors.ratings?.errorMessage}
        hasError={errors.ratings?.hasError}
        {...getOverrideProps(overrides, "ratings")}
      ></TextField>
      <TextField
        label="Image url"
        isRequired={false}
        isReadOnly={false}
        value={imageURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              numReviews,
              ratings,
              imageURL: value,
              totalRatings,
            };
            const result = onChange(modelFields);
            value = result?.imageURL ?? value;
          }
          if (errors.imageURL?.hasError) {
            runValidationTasks("imageURL", value);
          }
          setImageURL(value);
        }}
        onBlur={() => runValidationTasks("imageURL", imageURL)}
        errorMessage={errors.imageURL?.errorMessage}
        hasError={errors.imageURL?.hasError}
        {...getOverrideProps(overrides, "imageURL")}
      ></TextField>
      <TextField
        label="Total ratings"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={totalRatings}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Name,
              numReviews,
              ratings,
              imageURL,
              totalRatings: value,
            };
            const result = onChange(modelFields);
            value = result?.totalRatings ?? value;
          }
          if (errors.totalRatings?.hasError) {
            runValidationTasks("totalRatings", value);
          }
          setTotalRatings(value);
        }}
        onBlur={() => runValidationTasks("totalRatings", totalRatings)}
        errorMessage={errors.totalRatings?.errorMessage}
        hasError={errors.totalRatings?.hasError}
        {...getOverrideProps(overrides, "totalRatings")}
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
