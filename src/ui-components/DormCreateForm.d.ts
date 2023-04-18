/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DormCreateFormInputValues = {
    Name?: string;
    numReviews?: number;
    ratings?: number;
};
export declare type DormCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    numReviews?: ValidationFunction<number>;
    ratings?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DormCreateFormOverridesProps = {
    DormCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    numReviews?: PrimitiveOverrideProps<TextFieldProps>;
    ratings?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DormCreateFormProps = React.PropsWithChildren<{
    overrides?: DormCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DormCreateFormInputValues) => DormCreateFormInputValues;
    onSuccess?: (fields: DormCreateFormInputValues) => void;
    onError?: (fields: DormCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DormCreateFormInputValues) => DormCreateFormInputValues;
    onValidate?: DormCreateFormValidationValues;
} & React.CSSProperties>;
export default function DormCreateForm(props: DormCreateFormProps): React.ReactElement;
