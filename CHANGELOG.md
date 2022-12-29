# v15.0.0
## 破坏性更新
- feat: `angular`升级到`^15.0.0`; 
- feat: `@bigbear713/nb-common`升级到`^15.0.0`; 

## 依赖
- feat: `uuid`升级到`^9.0.0`;

## [Tokens](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#Tokens "Tokens")
- feat: 增加[NB_TRANS_MAX_RETRY](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#nb_trans_max_retry)，`NB_TRANS_MAX_RETRY_TOKEN`标记为`deprecated`；

## [Enums](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#Enums "Enums")
- feat: 增加[NbTransLang](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#nbtranslang)，`NbTransLangEnum`标记为`deprecated`；
- feat: 增加[NbTransSentenceItem](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#nbtranssentenceitem)，`NbTransSentenceItemEnum`标记为`deprecated`；

## [Services](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#Services "Services")
- refactor: 优化[NbTransService](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#nbtransservice "NbTransService")；

## [Pipes](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#Pipes "Pipes")
- refactor: 优化[nbTrans](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#nbtrans-transformkey-string-options-inbtransoptions-string)；

<br/>

# v14.0.0
## 破坏性更新
- feat: `angular`升级到`^14.0.0`;
- feat: `@bigbear713/nb-common`升级到`^14.0.0`; 

<br/>

# v13.0.1
## 破坏性更新
- fix: `nb-common`版本调整为`^13.0.0`;

<br/>

# v13.0.0
## 破坏性更新
- feat: `angular`升级到`^13.0.0`;

<br/>

# v12.1.0
## [Services](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#Services "Services")
### [NbTransService](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#nbtransservice "NbTransService")
- feat: `NbTransService.getBrowserLang()`可以直接获取浏览器的首选语言;
- depr: `getBrowserLang()`被标志为`deprecated`;
- feat: `NbTransService.getBrowserLangs()`可以直接获取一个用户已知语言的数组;
- depr: `getBrowserLangs()`被标志为`deprecated`;

<br/>

# v12.0.0
## [Module](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#Module "Module")
- feat: [NbTransModule](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#nbtransmodule) - 提供可用的`component`, `pipe`
- feat: [NbTransTestingModule](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#nbtranstestingmodule) - 提供单元测试环境

## [Services](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#Services "Services")
- feat: [NbTransService](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#nbtransservice "NbTransService") - 提供多语言翻译功能

## [Components](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#Components "Components")
- feat: [`<nb-trans></nb-trans>`](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#nb-transnb-trans) - 当翻译文本中含有组件等复杂场景时使用的组件
- feat: [`[nb-trans-subcontent]`](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#nb-trans-subcontent) - 当翻译文本中含有组件嵌套时使用的一种官方提供的方案(可根据需要有自己的实现方式)，会将嵌套的组件内容渲染出来

## [Pipes](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#Pipes "Pipes")
- feat: [nbTrans](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#nbtrans-transformkey-string-options-inbtransoptions-string) - 翻译文本的管道

## [Tokens](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#Tokens "Tokens")
- feat: [NB_TRANS_DEFAULT_LANG](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#nb_trans_default_lang) - 设置默认语言
- feat: [NB_TRANS_LOADER](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#nb_trans_loader) - 翻译文本加载器
- feat: [NB_TRANS_MAX_RETRY](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#nb_trans_max_retry) - 翻译文本加载失败时的最大重试次数

## [Interfaces](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#Interfaces "Interfaces")
- feat: [INbTransLoader](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#inbtransloader) - 文本加载器
- feat: [INbTransOptions](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#inbtransoptions) - 翻译配置
- feat: [INbTransParams](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#inbtransparams) - 翻译文本中的参数
- feat: [INbTransChangeLang](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#inbtranschangelang) - 切换语言的结果
- feat: [INbTransSentencePart](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#inbtranssentencepart) - 句子部分
- feat: [INbTransSentenceCompPart](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#inbtranssentencecomppart) - 句子中含有组件的部分

## [Enums](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#Enums "Enums")
- feat: [NbTransLang](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#nbtranslang) - 常用语言枚举
- feat: [NbTransSentenceItem](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.md#nbtranssentenceitem) - 句子项类型枚举