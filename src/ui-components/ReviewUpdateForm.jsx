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
export default function ReviewUpdateForm(props) {
  const {
    id: idProp,
    review: reviewModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    description: "",
    date: "",
    wouldRoomAgain: false,
    rating: "",
    numBathrooms: "",
    numResidents: "",
    numLikes: "",
    userEmail: "",
    dormName: "",
  };
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [date, setDate] = React.useState(initialValues.date);
  const [wouldRoomAgain, setWouldRoomAgain] = React.useState(
    initialValues.wouldRoomAgain
  );
  const [rating, setRating] = React.useState(initialValues.rating);
  const [numBathrooms, setNumBathrooms] = React.useState(
    initialValues.numBathrooms
  );
  const [numResidents, setNumResidents] = React.useState(
    initialValues.numResidents
  );
  const [numLikes, setNumLikes] = React.useState(initialValues.numLikes);
  const [userEmail, setUserEmail] = React.useState(initialValues.userEmail);
  const [dormName, setDormName] = React.useState(initialValues.dormName);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = reviewRecord
      ? { ...initialValues, ...reviewRecord }
      : initialValues;
    setDescription(cleanValues.description);
    setDate(cleanValues.date);
    setWouldRoomAgain(cleanValues.wouldRoomAgain);
    setRating(cleanValues.rating);
    setNumBathrooms(cleanValues.numBathrooms);
    setNumResidents(cleanValues.numResidents);
    setNumLikes(cleanValues.numLikes);
    setUserEmail(cleanValues.userEmail);
    setDormName(cleanValues.dormName);
    setErrors({});
  };
  const [reviewRecord, setReviewRecord] = React.useState(reviewModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Review, idProp)
        : reviewModelProp;
      setReviewRecord(record);
    };
    queryData();
  }, [idProp, reviewModelProp]);
  React.useEffect(resetStateValues, [reviewRecord]);
  const validations = {
    description: [],
    date: [],
    wouldRoomAgain: [],
    rating: [],
    numBathrooms: [],
    numResidents: [],
    numLikes: [],
    userEmail: [{ type: "Email" }],
    dormName: [],
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
          description,
          date,
          wouldRoomAgain,
          rating,
          numBathrooms,
          numResidents,
          numLikes,
          userEmail,
          dormName,
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
          await DataStore.save(
            Review.copyOf(reviewRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ReviewUpdateForm")}
      {...rest}
    >
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              description: value,
              date,
              wouldRoomAgain,
              rating,
              numBathrooms,
              numResidents,
              numLikes,
              userEmail,
              dormName,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              description,
              date: value,
              wouldRoomAgain,
              rating,
              numBathrooms,
              numResidents,
              numLikes,
              userEmail,
              dormName,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <SwitchField
        label="Would room again"
        defaultChecked={false}
        isDisabled={false}
        isChecked={wouldRoomAgain}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              description,
              date,
              wouldRoomAgain: value,
              rating,
              numBathrooms,
              numResidents,
              numLikes,
              userEmail,
              dormName,
            };
            const result = onChange(modelFields);
            value = result?.wouldRoomAgain ?? value;
          }
          if (errors.wouldRoomAgain?.hasError) {
            runValidationTasks("wouldRoomAgain", value);
          }
          setWouldRoomAgain(value);
        }}
        onBlur={() => runValidationTasks("wouldRoomAgain", wouldRoomAgain)}
        errorMessage={errors.wouldRoomAgain?.errorMessage}
        hasError={errors.wouldRoomAgain?.hasError}
        {...getOverrideProps(overrides, "wouldRoomAgain")}
      ></SwitchField>
      <TextField
        label="Rating"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={rating}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              description,
              date,
              wouldRoomAgain,
              rating: value,
              numBathrooms,
              numResidents,
              numLikes,
              userEmail,
              dormName,
            };
            const result = onChange(modelFields);
            value = result?.rating ?? value;
          }
          if (errors.rating?.hasError) {
            runValidationTasks("rating", value);
          }
          setRating(value);
        }}
        onBlur={() => runValidationTasks("rating", rating)}
        errorMessage={errors.rating?.errorMessage}
        hasError={errors.rating?.hasError}
        {...getOverrideProps(overrides, "rating")}
      ></TextField>
      <TextField
        label="Num bathrooms"
        isRequired={false}
        isReadOnly={false}
        value={numBathrooms}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              description,
              date,
              wouldRoomAgain,
              rating,
              numBathrooms: value,
              numResidents,
              numLikes,
              userEmail,
              dormName,
            };
            const result = onChange(modelFields);
            value = result?.numBathrooms ?? value;
          }
          if (errors.numBathrooms?.hasError) {
            runValidationTasks("numBathrooms", value);
          }
          setNumBathrooms(value);
        }}
        onBlur={() => runValidationTasks("numBathrooms", numBathrooms)}
        errorMessage={errors.numBathrooms?.errorMessage}
        hasError={errors.numBathrooms?.hasError}
        {...getOverrideProps(overrides, "numBathrooms")}
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
              description,
              date,
              wouldRoomAgain,
              rating,
              numBathrooms,
              numResidents: value,
              numLikes,
              userEmail,
              dormName,
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
        type="number"
        step="any"
        value={numLikes}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              description,
              date,
              wouldRoomAgain,
              rating,
              numBathrooms,
              numResidents,
              numLikes: value,
              userEmail,
              dormName,
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
        label="User email"
        isRequired={false}
        isReadOnly={false}
        value={userEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              description,
              date,
              wouldRoomAgain,
              rating,
              numBathrooms,
              numResidents,
              numLikes,
              userEmail: value,
              dormName,
            };
            const result = onChange(modelFields);
            value = result?.userEmail ?? value;
          }
          if (errors.userEmail?.hasError) {
            runValidationTasks("userEmail", value);
          }
          setUserEmail(value);
        }}
        onBlur={() => runValidationTasks("userEmail", userEmail)}
        errorMessage={errors.userEmail?.errorMessage}
        hasError={errors.userEmail?.hasError}
        {...getOverrideProps(overrides, "userEmail")}
      ></TextField>
      <TextField
        label="Dorm name"
        isRequired={false}
        isReadOnly={false}
        value={dormName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              description,
              date,
              wouldRoomAgain,
              rating,
              numBathrooms,
              numResidents,
              numLikes,
              userEmail,
              dormName: value,
            };
            const result = onChange(modelFields);
            value = result?.dormName ?? value;
          }
          if (errors.dormName?.hasError) {
            runValidationTasks("dormName", value);
          }
          setDormName(value);
        }}
        onBlur={() => runValidationTasks("dormName", dormName)}
        errorMessage={errors.dormName?.errorMessage}
        hasError={errors.dormName?.hasError}
        {...getOverrideProps(overrides, "dormName")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || reviewModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || reviewModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
