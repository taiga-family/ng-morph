# <img src="apps/demo/src/assets/images/ng-morph.png" alt="logo" width="48px"> ng-morph

[![npm version](https://img.shields.io/npm/v/ng-morph.svg)](https://npmjs.com/package/ng-morph)
[![downloads](https://img.shields.io/npm/dy/ng-morph?color=dark-green)](https://npmjs.com/package/ng-morph)
[![telegram chat](https://img.shields.io/badge/support-Contact%20us-blue)](https://t.me/taiga_ui)

Code mutations were never easier than now.

```
npm i --save-dev ng-morph
```

You also need `@angular-devkit/core` and `@angular-devkit/schematics` to be installed.

## What is it?

It is a large set of tools for both global code base updates in your project and speeding up your work on Angular
schematics. It has [ts-morph](https://ts-morph.com/) under the hood and allows you to manipulate with safe TypeScript
AST.

## Why is it better than default schematics?

🦅 You can quickly write migrations for your own project and run it as a simple script

🛠 There are many tools made for working with Angular. You can easily find and manipulate TS and Ng entities.

✅ You work with an abstract tree and it can be replaced, for example, with virtual tree for testing instead of real
file system. So, you can test your schematics rapidly fast.

## How to start

Install the package and visit our [documentation](https://taiga-family.github.io/ng-morph)

For example, this is how `ng-morph` setup looks for migrating your own project:

```typescript
import {setActiveProject, createProject, getImports, NgMorphTree} from 'ng-morph';

/**
 * set all ng-morph functions to work with the all TS and JSON files
 * of the current project
 * */
setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts', '**/*.json']));

/**
 * This simple migration gets all imports from the project TS files and
 * replaces 'old' substring with 'new'
 * */
const imports = getImports('some/path/**.ts', {
  moduleSpecifier: '@morph-old*',
});

editImports(imports, (importEntity) => ({
  moduleSpecifier: importEntity.moduleSpecifier.replace('old', 'new'),
}));

/**
 * All changes are made in a virtual project.
 * You can save them when it is time
 * */
saveActiveProject();
```

You can check it out on
[Stackblitz playground](https://stackblitz.com/edit/ts-angular-13-web-container-starter-nzd2ew?file=ng-morph-scripts%2Fscript.ts,src%2Fapp%2Fapp.component.ts)

## Dive into More Examples 🌟🔍

- [Add readonly for unchanged 📜🔒](https://stackblitz.com/edit/ts-angular-13-web-container-starter-55t636?file=ng-morph-scripts%2Fscript.ts)
- [Upgrade constructor DI to inject 🛠️🎩](https://stackblitz.com/edit/ts-angular-13-web-container-starter-ozrudz?file=ng-morph-scripts%2Fscript.ts)
- [Remove unused deps 🧹❌](https://stackblitz.com/edit/ts-angular-13-web-container-starter-d4rb9b?file=ng-morph-scripts%2Fscript.ts)
- [Prefix for selector 🏷️✨](https://stackblitz.com/edit/ts-angular-13-web-container-starter-9dawcd?file=ng-morph-scripts%2Fscript.ts)

For more examples visit [this stackblitz collection](https://stackblitz.com/@MarsiBarsi/collections/ng-morph-examples)

## Core team

<table>
    <tr>
       <td align="center">
            <a href="https://twitter.com/katsuba_igor"
                ><img
                    src="https://github.com/IKatsuba.png?size=100"
                    width="100"
                    style="margin-bottom: -4px; border-radius: 8px;"
                    alt="Igor Katsuba"
                /><br /><sub><b>Igor Katsuba</b></sub></a
            >
            <div style="margin-top: 4px">
                <a
                    href="https://twitter.com/katsuba_igor"
                    title="Twitter"
                    ><img
                        style="width: 16px;"
                        width="16"
                        src="https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/twitter.svg"
                /></a>
                <a href="https://github.com/IKatsuba" title="Github"
                    ><img
                        width="16"
                        src="https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/github.svg"
                /></a>
                <a
                    href="https://t.me/Katsuba"
                    title="Telegram"
                    ><img
                        width="16"
                        src="https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/send.svg"
                /></a>
            </div>
        </td>
        <td align="center">
            <a href="http://marsibarsi.me"
                ><img
                    src="https://github.com/marsibarsi.png?size=100"
                    width="100"
                    style="margin-bottom: -4px; border-radius: 8px;"
                    alt="Roman Sedov"
                /><br /><b>Roman Sedov</b></a
            >
            <div style="margin-top: 4px">
                <a
                    href="https://twitter.com/marsibarsi"
                    title="Twitter"
                    ><img
                        width="16"
                        src="https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/twitter.svg"
                /></a>
                <a
                    href="https://github.com/marsibarsi"
                    title="GitHub"
                    ><img
                        width="16"
                        src="https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/github.svg"
                /></a>
                <a
                    href="https://t.me/marsibarsi"
                    title="Telegram"
                    ><img
                        width="16"
                        src="https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/send.svg"
                /></a>
            </div>
        </td>
    </tr>

</table>

ng-morph is a part of [Taiga UI](https://github.com/taiga-family/taiga-ui) libraries family which is backed and used by
a large enterprise. This means you can rely on timely support and continuous development.

## License

🆓 Feel free to use our library in your commercial and private applications

All ng-morph packages are covered by [Apache 2.0](/LICENSE)

Read more about this license [here](https://choosealicense.com/licenses/apache-2.0/)
