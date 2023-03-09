import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentComponentComponent } from './content-component/content-component.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentFilterPipe } from './pipes/content-filter.pipe';
import { HoverAffectDirective } from './content-component/hover-affect.directive';
import { AppMessagesComponent } from './app-messages/app-messages.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponentComponent,
    ContentListComponent,
    ContentFilterPipe,
    HoverAffectDirective,
    AppMessagesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
