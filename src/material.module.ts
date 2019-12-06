import { NgModule } from '@angular/core';
import { MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
    imports: [
        MatCardModule,
        MatInputModule,
        MatButtonModule,
    ],
    exports : [
        MatCardModule,
        MatInputModule,
        MatButtonModule,       
    ]
})
export class MaterialModule {


}