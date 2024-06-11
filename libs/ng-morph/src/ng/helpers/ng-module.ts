import type {ClassDeclaration} from 'ts-morph';

import {getClasses} from '../../classes';
import {getImports} from '../../imports';
import type {Pattern, Query, StructureType} from '../../utils';

export function getNgModules(
    pattern: Pattern,
    query?: Query<Omit<StructureType<ClassDeclaration>, 'kind'>>,
): ClassDeclaration[] {
    return getClasses(pattern, query).filter(
        declaration => !!declaration.getDecorator('NgModule'),
    );
}

/**
 * Find NgModule where the component was declared.
 */
export function findNgModule(
    ngComponent: ClassDeclaration,
    pattern: Pattern,
): ClassDeclaration | null {
    const allNgModules = getNgModules(pattern);

    return (
        allNgModules.find(module => {
            const moduleFile = module.getSourceFile();
            const imports = getImports(moduleFile.getFilePath(), {
                namedImports: ngComponent.getName(),
            });

            return imports.some(
                i => i.getModuleSpecifierSourceFile() === ngComponent.getSourceFile(),
            );
        }) || null
    );
}
