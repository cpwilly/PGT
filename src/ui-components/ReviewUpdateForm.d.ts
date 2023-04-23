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
    dormName?: string;
    date?: string;
    wouldRoomAgain?: boolean;
    numResidents?: number;
    numBathrooms?: string;
    description?: string;
    rating?: number;
    numLikes?: number;
    userEmail?: string;
};
export declare type ReviewUpdateFormValidationValues = {
    dormName?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    wouldRoomAgain?: ValidationFunction<boolean>;
    numResidents?: ValidationFunction<number>;
    numBathrooms?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    rating?: ValidationFunction<number>;
    numLikes?: ValidationFunction<number>;
    userEmail?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewUpdateFormOverridesProps = {
    ReviewUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    dormName?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    wouldRoomAgain?: PrimitiveOverrideProps<SwitchFieldProps>;
    numResidents?: PrimitiveOverrideProps<TextFieldProps>;
    numBathrooms?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
    numLikes?: PrimitiveOverrideProps<TextFieldProps>;
    userEmail?: PrimitiveOverrideProps<TextFieldProps>;
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
