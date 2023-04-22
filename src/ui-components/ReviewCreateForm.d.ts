/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReviewCreateFormInputValues = {
    description?: string;
    date?: string;
    wouldRoomAgain?: boolean;
    rating?: number;
    numBathrooms?: string;
    numResidents?: number;
    numLikes?: number;
    userEmail?: string;
    dormName?: string;
};
export declare type ReviewCreateFormValidationValues = {
    description?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    wouldRoomAgain?: ValidationFunction<boolean>;
    rating?: ValidationFunction<number>;
    numBathrooms?: ValidationFunction<string>;
    numResidents?: ValidationFunction<number>;
    numLikes?: ValidationFunction<number>;
    userEmail?: ValidationFunction<string>;
    dormName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewCreateFormOverridesProps = {
    ReviewCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    wouldRoomAgain?: PrimitiveOverrideProps<SwitchFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
    numBathrooms?: PrimitiveOverrideProps<TextFieldProps>;
    numResidents?: PrimitiveOverrideProps<TextFieldProps>;
    numLikes?: PrimitiveOverrideProps<TextFieldProps>;
    userEmail?: PrimitiveOverrideProps<TextFieldProps>;
    dormName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReviewCreateFormProps = React.PropsWithChildren<{
    overrides?: ReviewCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReviewCreateFormInputValues) => ReviewCreateFormInputValues;
    onSuccess?: (fields: ReviewCreateFormInputValues) => void;
    onError?: (fields: ReviewCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReviewCreateFormInputValues) => ReviewCreateFormInputValues;
    onValidate?: ReviewCreateFormValidationValues;
} & React.CSSProperties>;
export default function ReviewCreateForm(props: ReviewCreateFormProps): React.ReactElement;
