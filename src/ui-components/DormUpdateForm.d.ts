/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CheckboxFieldProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Dorm } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DormUpdateFormInputValues = {
    Name?: string;
    numReviews?: number;
    ratings?: number;
    STJ?: boolean;
};
export declare type DormUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    numReviews?: ValidationFunction<number>;
    ratings?: ValidationFunction<number>;
    STJ?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DormUpdateFormOverridesProps = {
    DormUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    numReviews?: PrimitiveOverrideProps<TextFieldProps>;
    ratings?: PrimitiveOverrideProps<TextFieldProps>;
    STJ?: PrimitiveOverrideProps<CheckboxFieldProps>;
} & EscapeHatchProps;
export declare type DormUpdateFormProps = React.PropsWithChildren<{
    overrides?: DormUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    dorm?: Dorm;
    onSubmit?: (fields: DormUpdateFormInputValues) => DormUpdateFormInputValues;
    onSuccess?: (fields: DormUpdateFormInputValues) => void;
    onError?: (fields: DormUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DormUpdateFormInputValues) => DormUpdateFormInputValues;
    onValidate?: DormUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DormUpdateForm(props: DormUpdateFormProps): React.ReactElement;
