import { NgModule } from "@angular/core";
import { GenericButtonComponent } from "../generic-components/generic-button/generic-button.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from "@angular/forms";
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
    declarations:[GenericButtonComponent], // add the components here 
    imports:[
        CommonModule,
        MatIconModule, 
        MatButtonModule, 
        MatTableModule,
        MatSortModule,
        MatFormFieldModule, 
        MatInputModule, 
        MatTableModule, 
        MatSortModule, 
        MatPaginatorModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatDialogModule
    ],
    exports:[
        GenericButtonComponent,
        CommonModule,
        MatIconModule, 
        MatButtonModule, 
        MatTableModule,
        MatSortModule,
        MatFormFieldModule, 
        MatInputModule, 
        MatTableModule, 
        MatSortModule, 
        MatPaginatorModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatDialogModule

    ] // export it so that other module can reuse

})
export class SharedModule{

}