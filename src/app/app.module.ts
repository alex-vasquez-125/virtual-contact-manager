import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { TablePageComponent } from './pages/table-page/table-page.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { MatCardModule } from '@angular/material/card';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { ContactListItemComponent } from './components/contact-list-item/contact-list-item.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DatabaseResultDialogComponent } from './components/database-result-dialog/database-result-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    CardPageComponent,
    ListPageComponent,
    TablePageComponent,
    HeaderComponent,
    ContactCardComponent,
    NotFoundPageComponent,
    ContactListItemComponent,
    ContactListComponent,
    ContactFormComponent,
    DatabaseResultDialogComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatDialogModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatGridListModule,
        ScrollingModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatTooltipModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// todo angular material docs say i need to include entryComponent section
//  https://material.angular.io/components/dialog/overview#configuring-dialog-content-via-entrycomponents

// todo add null checks everywhere

// todo impl consistent naming convention
