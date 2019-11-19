import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { ImagePickerComponent } from './image-picker/image-picker.component';
import { LocationPickerComponent } from './pickers/location-picker/location-picker.component';
import { MapModalComponent } from './pickers/map-modal/map-modal.component';

@NgModule({
    declarations: [LocationPickerComponent, MapModalComponent, ImagePickerComponent],
    imports: [CommonModule, IonicModule],
    exports: [LocationPickerComponent, MapModalComponent, ImagePickerComponent],
    entryComponents: [MapModalComponent]
})
export class SharedModule { }