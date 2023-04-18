/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Dorm } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Desktop1OverridesProps = {
    "1"?: PrimitiveOverrideProps<TextProps>;
    "3"?: PrimitiveOverrideProps<TextProps>;
    "5"?: PrimitiveOverrideProps<TextProps>;
    Desktop1?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<ViewProps>;
    "01228"?: PrimitiveOverrideProps<TextProps>;
    "Date reviewed: mm/dd/yyyy"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<ViewProps>;
    Overall?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 6"?: PrimitiveOverrideProps<ViewProps>;
    Bathrooms?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 7"?: PrimitiveOverrideProps<ViewProps>;
    "Common Areas"?: PrimitiveOverrideProps<TextProps>;
    "image 1"?: PrimitiveOverrideProps<ImageProps>;
    "image 2"?: PrimitiveOverrideProps<ImageProps>;
    "01227"?: PrimitiveOverrideProps<TextProps>;
    "INSERT REVIEW HERE"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 8"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type Desktop1Props = React.PropsWithChildren<Partial<ViewProps> & {
    dorm?: Dorm;
} & {
    overrides?: Desktop1OverridesProps | undefined | null;
}>;
export default function Desktop1(props: Desktop1Props): React.ReactElement;
