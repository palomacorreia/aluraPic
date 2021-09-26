import { isLowerCase, lowerCaseValidator } from "./lower-case.validator";

describe(`#${lowerCaseValidator.name}`, () => {
    it(`#${isLowerCase.name} deve confirmar quando recebe um texto em caixa baixa`, () => {
        const value = 'paloma';
        const result = isLowerCase(value);
        expect(result).toBeTruthy();
    });

    it(`#${isLowerCase.name} deve validar quando o valor não for um texto em caixa baixa`, () => {
        const value = 'Paloma';
        const result = isLowerCase(value);
        expect(result).toBeFalsy();
    });
});
