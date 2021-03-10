import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from  '@angular/material/autocomplete'
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AppDateAdapter, APP_DATE_FORMATS } from './date.adapter';
import { MaskPipe } from './pipe/mask.pipe';
import { MaskDirective } from './directive/mask.directive';
import { FlexLayoutModule } from '@angular/flex-layout/';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    MaskPipe,
    MaskDirective
  ],
  imports: [
    FlexLayoutModule,
    HttpClientModule,
    MatDatepickerModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatMenuModule,
    MatTabsModule,
    MatListModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatSortModule,
    MatSelectModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatDialogModule,
    MatStepperModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    HttpClientModule,
    FlexLayoutModule,
    MaskDirective,
    MaskPipe,
    MatDatepickerModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatMenuModule,
    MatTabsModule,
    MatListModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatSortModule,
    MatSelectModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatDialogModule,
    MatStepperModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule
    };
  }
}
