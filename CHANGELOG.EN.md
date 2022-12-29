# v15.0.0
## Breaking Changes
- feat: Upgrade `angular` to `^15.0.0`;
- feat: Upgrade `@bigbear713/nb-common` to `^15.0.0`;

## Dependencies
- feat: Upgrade `uuid` to `^9.0.0`;

## [Tokens](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#Tokens "Tokens")
- feat: Add [NB_TRANS_MAX_RETRY](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#nb_trans_max_retry), mark `NB_TRANS_MAX_RETRY_TOKEN` as `deprecated`;

## [Enums](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#Enums "Enums")
- feat: Add [NbTransLang](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#nbtranslang), mark `NbTransLangEnum` as `deprecated`;
- feat: Add [NbTransSentenceItem](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#nbtranssentenceitem), mark `NbTransSentenceItemEnum` as `deprecated`;

## [Services](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#Services "Services")
- refactor: optimize [NbTransService](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#nbtransservice "NbTransService");

## [Pipes](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#Pipes "Pipes")
- refactor: optimize [nbTrans](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#nbtrans-transformkey-string-options-inbtransoptions-string);

<br/>

# v14.0.0
## Breaking Changes
- feat: Upgrade `angular` to `^14.0.0`;
- feat: Upgrade `@bigbear713/nb-common` to `^14.0.0`;

<br/>

# v13.0.1
## Breaking Changes
- fix: Update the version of `nb-common` as `^13.0.0`;

<br/>

# v13.0.0
## Breaking Changes
- feat: Upgrade `angular` to `^13.0.0`;

<br/>

# v12.1.0
## [Services](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#Services "Services")
### [NbTransService](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#nbtransservice "NbTransService")
- feat: `NbTransService.getBrowserLang()` can the first language of browser directly
- depr: `getBrowserLang()` has been marked as `deprecated`;
- feat: `NbTransService.getBrowserLangs()` can a language array known directly
- depr: `getBrowserLangs()` has been marked as `deprecated`;

<br/>

# v12.0.0
## [Module](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#Module "Module")
- feat: [NbTransModule](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#nbtransmodule) - provide useful `component`, `pipe`
- feat: [NbTransTestingModule](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#nbtranstestingmodule) - provide the env to unit test

## [Services](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#Services "Services")
- feat: [NbTransService](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#nbtransservice "NbTransService") - provide the translate feature

## [Components](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#Components "Components")
- feat: [`<nb-trans></nb-trans>`](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#nb-transnb-trans) - when you need to translate the sentence which include components
- feat: [`[nb-trans-subcontent]`](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#nb-trans-subcontent) - it is a common solution when the sentence include some nested componets (you can impletement yourself to meet the requirement)

## [Pipes](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#Pipes "Pipes")
- feat: [nbTrans](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#nbtrans-transformkey-string-options-inbtransoptions-string) - the pipe which to tranlate the text

## [Tokens](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#Tokens "Tokens")
- feat: [NB_TRANS_DEFAULT_LANG](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#nb_trans_default_lang) - set the default langs
- feat: [NB_TRANS_LOADER](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#nb_trans_loader) - the loader of translated text
- feat: [NB_TRANS_MAX_RETRY](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#nb_trans_max_retry) - the max retry time when failure to load translated file

## [Interfaces](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#Interfaces "Interfaces")
- feat: [INbTransLoader](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#inbtransloader) - the translated file loader
- feat: [INbTransOptions](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#inbtransoptions) - the config of translation
- feat: [INbTransParams](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#inbtransparams) - the params in the translated text
- feat: [INbTransChangeLang](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#inbtranschangelang) - the result of switching language
- feat: [INbTransSentencePart](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#inbtranssentencepart) - the part of sentence
- feat: [INbTransSentenceCompPart](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#inbtranssentencecomppart) - the part which include component in sentence

## [Enums](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#Enums "Enums")
- feat: [NbTransLang](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#nbtranslang) - the enum of common language
- feat: [NbTransSentenceItem](https://github.com/bigBear713/nb-trans/blob/master/projects/nb-trans/README.EN.md#nbtranssentenceitem) - the enum of sentence item