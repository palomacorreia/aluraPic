import { AlertComponent } from './alert.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertService } from './alert.service';

@NgModule({
    declarations: [AlertComponent],
    exports: [AlertComponent],
    imports: [CommonModule],

})
export class AlertModule {}
