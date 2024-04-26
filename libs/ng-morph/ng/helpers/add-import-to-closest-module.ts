import type {Pattern} from '../../utils';
import {addImportToComponent} from '../component';
import {addImportToNgModule} from '../module';
import {addUniqueImport} from './add-unique-import';
import {isStandaloneComponent} from './is-standalone-component';
import {getNgComponents} from './ng-component';
import {findNgModule} from './ng-module';

export function addImportToClosestModule(
    componentPath: string,
    moduleName: string,
    moduleSpecifier: string,
    pattern: Pattern,
): void {
    const [ngComponent] = getNgComponents(componentPath);

    if (!ngComponent) {
        return;
    }

    if (isStandaloneComponent(ngComponent)) {
        addImportToComponent(ngComponent, moduleName, {unique: true});
        addUniqueImport(
            ngComponent.getSourceFile().getFilePath(),
            moduleName,
            moduleSpecifier,
        );

        return;
    }

    const ngModule = findNgModule(ngComponent, pattern);

    if (ngModule) {
        addImportToNgModule(ngModule, moduleName, {
            unique: true,
        });
        addUniqueImport(
            ngModule.getSourceFile().getFilePath(),
            moduleName,
            moduleSpecifier,
        );
    }
}
