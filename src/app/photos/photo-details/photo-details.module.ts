import { NgModule } from "@angular/core";
import { PhotoDetailsComponent } from "./photo-details.component";
import { CommonModule } from "@angular/common";
import { PhotoModule } from "../photo/photo.module";
import { PhotoCommentsComponent } from "./photo-comment/photo-comment.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [PhotoDetailsComponent,PhotoCommentsComponent],
    exports: [PhotoDetailsComponent,PhotoCommentsComponent],
    imports: [CommonModule,PhotoModule,RouterModule]
})
export class PhotoDetailsModule { }