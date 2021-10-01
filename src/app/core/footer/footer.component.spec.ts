import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { UserService } from '../user/user.service';
import { FooterComponent } from './footer.component';

describe(`O componente #${FooterComponent.name}`, () => {
    let component: FooterComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [FooterComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        const userService = TestBed.get(UserService);
        spyOn(userService, 'getUser').and.returnValue(of({
            email: 'paloma@gmail.com',
            name: 'Paloma',
            id: 1
        }))
        const fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`#deve ser instanciado`, () => {
        expect(component).toBeTruthy();
    });

    afterEach(() => {
        localStorage.clear();
    });
});
