import core from "./core";

describe('should test core', () => {
    it('should check basic', () => {
        expect(core({
            mt: '10px'
        }, {mt: 'margin-top'})).toEqual({
            'margin-top':'10px'
        })
    });
    it('should check if undefined passed', () => {
        expect(core({
            mt: undefined
        }, {mt: 'margin-top'})).toStrictEqual({})
    });
});
