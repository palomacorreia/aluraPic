import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';

describe(`O serviço #${AuthService.name}`, () => {
    let service: AuthService;
    let serviceUser: UserService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AuthService]
        });
        service = TestBed.get(AuthService);
        serviceUser = TestBed.get(UserService);
        httpMock =  TestBed.get(HttpTestingController);
    });

    it(`#deve ser instanciado`, () => {
        expect(service).toBeTruthy();
    });

    it(`#deve autenticar o usuário`, fakeAsync(() => {
        const fakeUser = {
            id: 1,
            nome: 'paloma',
            email: 'paloma@loma.com'
        };

       const spy = spyOn(serviceUser, 'setToken').and.returnValue(null);

        service.authenticate('paloma', '1234').subscribe((response) => {
            expect(response.body).toEqual(fakeUser);
            expect(spy).toHaveBeenCalledWith('tokentest')
        });

        const request = httpMock.expectOne((req) => {
            return req.method === 'POST';
        });
        request.flush(fakeUser, {
            headers: {'x-access-token': 'tokentest'}
        });
    }));

});
