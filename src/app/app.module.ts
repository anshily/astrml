import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/layout/app.component';
import { MarkdownComponent } from './components/markdown/markdown.component';
import { StyleranderComponent } from './components/stylerander/stylerander.component';
import {FormsModule} from '@angular/forms';
import { KeephtmlPipe } from './pipes/keephtml.pipe';

import { HighlightModule } from 'ngx-highlightjs';

import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import javascript from 'highlight.js/lib/languages/javascript';
import vim from 'highlight.js/lib/languages/vim';
import { TerminalComponent } from './components/terminal/terminal.component';
import { FlowComponent } from './components/flow/flow.component';

export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'scss', func: scss},
    {name: 'xml', func: xml},
    {name: 'javascript', func: javascript},
    {name: 'vim', func: vim}

  ];
}


@NgModule({
  declarations: [
    AppComponent,
    MarkdownComponent,
    StyleranderComponent,
    KeephtmlPipe,
    TerminalComponent,
    FlowComponent
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
