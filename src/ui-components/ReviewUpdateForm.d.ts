/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Review } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReviewUpdateFormInputValues = {
    Description?: string;
    Date?: string;
    WouldRoomAgain?: boolean;
    Rating?: number;
    Bathroom?: string;
    numResidents?: number;
    numLikes?: string;
    accountEmail?: string;
};
export declare type ReviewUpdateFormValidationValues = {
    Description?: ValidationFunction<string>;
    Date?: ValidationFunction<string>;
    WouldRoomAgain?: ValidationFunction<boolean>;
    Rating?: ValidationFunction<number>;
    Bathroom?: ValidationFunction<string>;
    numResidents?: ValidationFunction<number>;
    numLikes?: ValidationFunction<string>;
    accountEmail?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewUpdateFormOverridesProps = {
    ReviewUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    Date?: PrimitiveOverrideProps<TextFieldProps>;
    WouldRoomAgain?: PrimitiveOverrideProps<SwitchFieldProps>;
    Rating?: PrimitiveOverrideProps<TextFieldProps>;
    Bathroom?: PrimitiveOverrideProps<TextFieldProps>;
    numResidents?: PrimitiveOverrideProps<TextFieldProps>;
    numLikes?: PrimitiveOverrideProps<TextFieldProps>;
    accountEmail?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReviewUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReviewUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    review?: Review;
    onSubmit?: (fields: ReviewUpdateFormInputValues) => ReviewUpdateFormInputValues;
    onSuccess?: (fields: ReviewUpdateFormInputValues) => void;
    onError?: (fields: ReviewUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReviewUpdateFormInputValues) => ReviewUpdateFormInputValues;
    onValidate?: ReviewUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReviewUpdateForm(props: ReviewUpdateFormProps): React.ReactElement;
