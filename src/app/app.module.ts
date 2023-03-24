import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentComponentComponent } from './content-component/content-component.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentFilterPipe } from './pipes/content-filter.pipe';
import { HoverAffectDirective } from './content-component/hover-affect.directive';
import { AppMessagesComponent } from './app-messages/app-messages.component';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./services/in-memory-data.service";


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
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 1000,
    }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
