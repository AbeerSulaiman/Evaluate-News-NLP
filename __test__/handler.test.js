import { handleSubmit } from "../src/client/js/formHandler"
describe('testing if the function is valid or not', () => {
    test("the function return  true if valid", () => {
        expect(handleSubmit).toBeDefined();
    });
})