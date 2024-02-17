import {
  type IVariantFunctionProps,
  type IVariantSecondFunctionProps,
} from './variant.types';

const variant =
  <T, TV>({ propName, themeProperty }: IVariantFunctionProps<T>) =>
  ({ theme, ...otherProps }: IVariantSecondFunctionProps<T>): TV => {
    const propertyValue = otherProps[propName as keyof typeof otherProps];
    const themeValues = theme?.[themeProperty] as Record<string, TV>;
    return themeValues[propertyValue as string];
  };
export default variant;
