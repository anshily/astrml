import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {TypewriterService} from '../../services/typewriter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private typewriter: TypewriterService) { }
  mObserverable = new Subject();
  vimObserverable = new Subject();
  flowObserverable = new Subject();
  styleObserverable = new Subject();
  terminalObserverable = new Subject();
  markdownObserverable = new Subject();
  observer = {
    next: (res) => {
      switch (res) {
        case 'mark':
          this.markdownObserverable.next(this.markText[0]);
          break;
        case 'vim':
          this.vimObserverable.next(this.styleText[1]);
          break;
        case 'style':
          this.styleObserverable.next();
          break;
        case 'terminal':
          this.terminalObserverable.next();
          break;
      }
    },
    error: (err) => {},
    complete: () => {}
  };
  flowRanderText = '';
  styleRanderText = '';
  terminalRanderText = '';
  markdownRanderText = '';

  styleList = [];
  markText = [`# hang
> test
test\`code\``];
  terminalText = [`# 修改样式文件
cd ~
mkdir anshi && cd anshi && vim style.css
`];
  Text = [
    `某日朋友发来一份很酷的动画简历 https://www.sitexa.org/anires/public/
立时便来了兴致，找到作者仓库 https://github.com/sitexa/anires
作者用 Vue 实现
鉴于最近工作中使用 Angular 便用 Angular 实现了一份
鸣谢：http://strml.net/
先打开一个终端
`,
    `制作一个 Markdown 组件`,
    ``
  ];

  styleText = [
    `/* 某日朋友发来一份很酷的动画简历 https://www.sitexa.org/anires/public/
* 立时便来了兴致，找到作者仓库 https://github.com/sitexa/anires
* 作者用 Vue 实现
* 鉴于最近工作中使用 Angular 便用 Angular 实现了一份
* 鸣谢：http://strml.net/
* 先打开一个终端
*/`, `/* 给所有元素加上过渡效果 */
* {
  transition: all .4s;
}
/* 设置边框 */
.style-wrapper{
  display: block;
  overflow-x: auto;
  padding: 2rem;
    z-index: 1;
  // background: #002b36;
  // background: hsl(20,40%,90%) fixed;
  // color: #839496;
}

/* 代码高亮 */
.hljs-selector-id,
.hljs-selector-class {
  color: #3182bd;
}
.hljs-attribute {
  color: #e6550d;
}
.hljs-number {
  color: #31a354;
}
  `];
  title = 'astrml';
  ob: Observable<any>;
  showTerminal = false;

  ngOnInit(): void {
    this.flowWrite();

    this.mObserverable.subscribe(res => {
      console.log(res);
    });
    this.vimObserverable.subscribe(res => {
      this.vimWrite(res);
    });
    this.styleObserverable.subscribe(res => {
      this.styleWrite(res);
    });
    this.terminalObserverable.subscribe(res => {
      this.terminalWrtie(res);
    });
    this.markdownObserverable.subscribe(res => {
      this.markdownWrite(res);
    });
  }
  typing() {
    this.ob.subscribe(res => {
      console.log(res);
    });
  }
  emit() {
    this.mObserverable.next('hang');
  }
  flowWrite() {
    // 简介 渲染流程文本
    this.typewriter.typing(this.Text[0], 'flow').subscribe(res => {
      this.flowRanderText += res.str;
    }, () => {}, () => {
      this.showTerminal = true;
      setTimeout(() => {
        this.typewriter.typing(this.terminalText[0], 'terminal').subscribe(res => {
          this.terminalRanderText += res.str;
        }, () => {}, () => {
          setTimeout(() => {
            this.observer.next('vim');
          }, 500);
        });
      }, 1200);
    });
  }
  vimWrite(str) {
    this.terminalRanderText = '';
    this.typewriter.typing(str, 'mark').subscribe(res => {
      if (res.event === '') {
        this.terminalRanderText += res.str;
        this.styleRanderText += res.str;
      } else {
        this.terminalRanderText += ':wq';
        this.observer.next(res.event);
      }
    }, res => {}, () => {
      // this.styleList.push(str)
      // this.showTerminal = false;
    });
  }
  styleWrite(str) {
    this.typewriter.typing(str, 'flow').subscribe(res => {
    }, res => {}, () => {});
  }
  terminalWrtie(str) {
    this.typewriter.typing(str, 'terminal').subscribe(res => {
      this.terminalRanderText = res.str;
    }, res => {}, () => {});
  }
  markdownWrite(str) {
    this.typewriter.typing(str, 'mark').subscribe(res => {
      if (res.event === '') {
        this.markdownRanderText += res.str;
      } else {
        // this.observer.next(res.event);
      }
    }, res => {}, () => {});
  }
  // doWrite(deal) {
  //   this.typewriter.typing(deal.str, deal.next).subscribe(res => {
  //     if (res.event === '') {
  //       this.terminalRanderText += res.str;
  //       this.styleRanderText += res.str;
  //     } else {
  //       this.terminalRanderText += ':wq';
  //       // this.observer.next(res.event);
  //     }
  //   }, res => {}, () => {
  //     // this.styleList.push(str)
  //     // this.showTerminal = false;
  //   });
  // }
}
