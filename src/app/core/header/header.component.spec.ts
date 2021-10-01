import { async, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AlertModule } from 'src/app/shared/components/alert/alert.module';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';
import { UserService } from '../user/user.service';
import { HeaderComponent } from './header.component';

describe(`O componente #${HeaderComponent.name}`, () => {
    let component: HeaderComponent;
    let userService: UserService;
    let router: Router;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes([]),
             MenuModule,
             AlertModule,
             LoadingModule],
            declarations: [HeaderComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
         userService = TestBed.get(UserService);
         router = TestBed.get(Router);
        spyOn(userService, 'getUser').and.returnValue(of({
            email: 'paloma@gmail.com',
            name: 'Paloma',
            id: 1
        }));
        const fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`#deve ser instanciado`, () => {
        expect(component).toBeTruthy();
    });

    it(`#deve ser realizar o logout`, () => {
       const spy = spyOn(userService, 'logout').and.returnValue(null);
       const navigateSpy = spyOn(router, 'navigate');
       component.logout();
       expect(spy).toHaveBeenCalled();
       expect(navigateSpy).toHaveBeenCalledWith(['']);
    });
});
