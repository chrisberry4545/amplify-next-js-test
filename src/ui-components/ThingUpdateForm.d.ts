/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Thing } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ThingUpdateFormInputValues = {
    name?: string;
};
export declare type ThingUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ThingUpdateFormOverridesProps = {
    ThingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ThingUpdateFormProps = React.PropsWithChildren<{
    overrides?: ThingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    thing?: Thing;
    onSubmit?: (fields: ThingUpdateFormInputValues) => ThingUpdateFormInputValues;
    onSuccess?: (fields: ThingUpdateFormInputValues) => void;
    onError?: (fields: ThingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ThingUpdateFormInputValues) => ThingUpdateFormInputValues;
    onValidate?: ThingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ThingUpdateForm(props: ThingUpdateFormProps): React.ReactElement;
