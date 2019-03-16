import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/layout/app.component';
import { MarkdownComponent } from './components/markdown/markdown.component';
import { StyleranderComponent } from './components/stylerander/stylerander.component';
import {FormsModule} from '@angular/forms';
import { KeephtmlPipe } from './pipes/keephtml.pipe';
import { ImageCropperModule } from 'ngx-image-cropper';

import { HighlightModule } from 'ngx-highlightjs';

import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import javascript from 'highlight.js/lib/languages/javascript';
import vim from 'highlight.js/lib/languages/vim';
import { TerminalComponent } from './components/terminal/terminal.component';
import { FlowComponent } from './components/flow/flow.component';
import {MarkdownModule, MarkedOptions, MarkedRenderer} from 'ngx-markdown';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CropperComponent } from './components/cropper/cropper.component';

export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'scss', func: scss},
    {name: 'xml', func: xml},
    {name: 'javascript', func: javascript},
    {name: 'vim', func: vim}

  ];
}

export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();
// 自定义Markdown渲染 引用换行
  renderer.blockquote = (text: string) => {
    return '<pre><blockquote class="blockquote"><p>' + text + '</p></blockquote></pre>';
  };

  return {
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
  };
}


@NgModule({
  declarations: [
    AppComponent,
    MarkdownComponent,
    StyleranderComponent,
    KeephtmlPipe,
    TerminalComponent,
    FlowComponent,
    CropperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory,
      } }),
      ImageCropperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
