import {NgModule} from '@angular/core';
import { UserFormComponent } from './user-form/user-form.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations:[UserFormComponent],
    imports:[SharedModule],
    exports:[],
})
export class UserActionModule{}