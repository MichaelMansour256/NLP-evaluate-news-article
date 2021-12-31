import {handleSubmit} from "./../js/handleSubmit"
describe('Test, the function "handleSubmit" should exist' , () => {
    test('should return true',  () => {
        expect(handleSubmit).toBeDefined();
    });
});
describe('Test, the function "handleSubmit" should be a function' , () => {
    test('should be a function',  () => {
        expect(typeof handleSubmit).toBe("function");
    });
});