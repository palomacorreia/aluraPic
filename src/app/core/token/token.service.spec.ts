import { TestBed } from '@angular/core/testing';
import { TokenService } from './token.service';

describe(`O serviço #${TokenService.name}`, () => {
    let service: TokenService;
    let token: string;
    beforeEach(() => {
        token = 'testeToken';
        service = new TokenService();
    });

    it(`#deve ser instanciado`, () => {
        expect(service).toBeTruthy();
    });
    it(`#getToken deve guardar o token`, () => {
        service.setToken(token);
        expect(service.hasToken()).toBeTruthy();
        expect(service.getToken()).toBe(token);
    });

    it(`#removeToken deve remover o token`, () => {
        service.setToken(token);
        service.removeToken();
        expect(service.hasToken()).toBeFalsy();
        expect(service.getToken()).toBeFalsy();
    });

    afterEach(() => {
        localStorage.clear();
    });
});
