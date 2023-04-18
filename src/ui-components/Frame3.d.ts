/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Frame3OverridesProps = {
    Frame3?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<ViewProps>;
    "Existing Dorm Rating"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<IconProps>;
    Year?: PrimitiveOverrideProps<TextProps>;
    "Filter Options"?: PrimitiveOverrideProps<TextProps>;
    Occupants?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 7"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 6"?: PrimitiveOverrideProps<ViewProps>;
    "Sort By:"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 8"?: PrimitiveOverrideProps<ViewProps>;
    "Taplin House Double"?: PrimitiveOverrideProps<TextProps>;
    "4.5"?: PrimitiveOverrideProps<TextProps>;
    "Amenities: -Double -Community Bath"?: PrimitiveOverrideProps<TextProps>;
    "-Floor Kitchenette -Community Kitchen"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 9"?: PrimitiveOverrideProps<ViewProps>;
    "Clarke Tower Single"?: PrimitiveOverrideProps<TextProps>;
    "3.7"?: PrimitiveOverrideProps<TextProps>;
    "Amenities: -Single -Suite Bath"?: PrimitiveOverrideProps<TextProps>;
    "-Suite Kitchenette -Community Kitchen"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Frame3Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Frame3OverridesProps | undefined | null;
}>;
export default function Frame3(props: Frame3Props): React.ReactElement;
