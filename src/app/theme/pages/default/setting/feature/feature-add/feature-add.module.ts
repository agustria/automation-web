import { FeatureAddComponent } from './feature-add.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../default.component';
import { GeneralService } from '../../../../../../_services/general.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GrowlModule, DialogModule, DropdownModule, RadioButtonModule } from 'primeng/primeng';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": FeatureAddComponent
            }
        ]
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        LayoutModule,
        FormsModule,
        ReactiveFormsModule,
        GrowlModule,
        DialogModule,
        DropdownModule,
        RadioButtonModule
    ], exports: [
        RouterModule
    ], declarations: [
        FeatureAddComponent
    ],
    providers: [GeneralService],
})
export class FeatureAddModule {



}