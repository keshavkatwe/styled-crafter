import ICssValue from "../../types/ICssValue";

const core = <T extends {}>(stylingValues: Record<keyof T, string>) => (stylingProps: {[KEY in keyof T]?:ICssValue} )=> {
    const cssValues: Record<string, ICssValue> = {}

    Object.keys(stylingProps).forEach(propKey => {
        let propertyValue = stylingProps[propKey];
        if (propertyValue) {
            if (typeof propertyValue === 'number') {
                propertyValue = propertyValue + 'px'
            }
            cssValues[stylingValues[propKey]] = propertyValue
        }
    })

    return cssValues;
}

export default core;
