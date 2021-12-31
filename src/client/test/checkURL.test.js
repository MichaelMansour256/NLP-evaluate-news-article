import {checkURL} from "./../js/checkURL"
describe('Test, the function "checkURL" should exist' , () => {
    test('should return true',  () => {
        expect(checkURL).toBeDefined();
    });
});
describe('Test, the function "checkURL" should be a function' , () => {
    test('should be a function',  () => {
        expect(typeof checkURL).toBe("function");
    });
});