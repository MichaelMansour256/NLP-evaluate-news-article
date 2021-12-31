import {fetchData} from "./../js/fetchData"
describe('Test, the function "fetchData" should exist' , () => {
    test('should return true',  () => {
        expect(fetchData).toBeDefined();
    });
});
describe('Test, the function "fetchData" should be a function' , () => {
    test('should be a function',  () => {
        expect(typeof fetchData).toBe("function");
    });
});