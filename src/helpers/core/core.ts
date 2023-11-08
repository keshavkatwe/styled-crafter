import ICssValue from "../../types/ICssValue";

const core = <T extends {}>(stylingProps: T, stylingValues: Record<keyof T, string>) => {
    const cssValues: Record<string, ICssValue> = {}

    Object.keys(stylingProps).forEach(propKey => {
        cssValues[stylingValues[propKey]] = stylingProps[propKey]
    })

    return cssValues;
}

export default core;
