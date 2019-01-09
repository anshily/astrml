import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarkdownComponent } from './markdown/markdown.component';
import { StyleranderComponent } from './stylerander/stylerander.component';
import {FormsModule} from '@angular/forms';
import { KeephtmlPipe } from './keephtml.pipe';

import { HighlightModule } from 'ngx-highlightjs';

import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import javascript from 'highlight.js/lib/languages/javascript';

export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'scss', func: scss},
    {name: 'xml', func: xml},
    {name: 'javascript', func: javascript}
  ];
}


@NgModule({
  declarations: [
    AppComponent,
    MarkdownComponent,
    StyleranderComponent,
    KeephtmlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
