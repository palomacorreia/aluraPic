import { UserService } from './user.service';
import { TestBed } from '@angular/core/testing';

describe(`O serviço #${UserService.name}`, () => {
    let service: UserService;
    let token: string;
    beforeEach(() => {
        // tslint:disable-next-line: max-line-length
        token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibmFtZSI6InBhbG9tYSIsImVtYWlsIjoicGFsb21hQGdtYWlsLmNvbSIsImlhdCI6MTYzMjY5ODQ2MCwiZXhwIjoxNjMyNzg0ODYwfQ.WUD6iefUGBXZk0iZ4s1iahrpQMPj3eoE_oleakVMYXo';
        TestBed.configureTestingModule({
            providers: [UserService]
        });
        service = TestBed.get(UserService);
    });

    it(`#${UserService.name} deve ser instanciado`, () => {
        expect(service).toBeTruthy();
    });

    it(`deve recuperar as informações do usuário`, () => {
        service.setToken(token);
        expect(service.isLogged).toBeTruthy();
        expect(service.getUserName).toBeTruthy();
        service.getUser().subscribe(user => {
            expect(user.name).toBe('paloma');
        });
    });

    it(`deve limpar as informações de logout`, () => {
        service.setToken(token);
        service.logout();
        expect(service.isLogged()).toBeFalsy();
    });
});
