import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';


@Component({
    templateUrl: 'signin.component.html'
})
export class SignInComponent implements OnInit {
    [x: string]: any;
    fromUrl: string;
    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.activatedRoute
            .queryParams
            .subscribe(params => this.fromUrl = params['fromUrl']);

        this.loginForm = this.formBuilder.group(
            {
                userName: ['', Validators.required],
                password: ['', Validators.required]
            }
        );
        this.userNameInput.nativeElement.focus();

    }

    login() {

        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        this.authService
            .authenticate(userName, password)
            .subscribe(
                () => this.fromUrl
                    ? this.router.navigateByUrl(this.fromUrl)
                    : this.router.navigate(['user', userName]),
            err => {
                console.log(err);
                this.loginForm.reset();
                this.platformDetectorService.isPlatformBrowser() &&
                    this.userNameInput.nativeElement.focus();
                alert('Invalid user name or password');
            }
            );
    }
}
