import { checkUrl } from "../src/client/js/checkUrl"

describe('testing submit', () => {
    test('Returns true on valid url', () => {
        expect(checkUrl('https://www.youtube.com')).toBeTruthy;
    })

})