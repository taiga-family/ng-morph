import {
    arrayFlat,
    coerceArray,
    getDeclarationGetter,
    matchQuery,
    Query,
} from 'ng-morph/utils';
import {DecoratableNode, Decorator, DecoratorStructure} from 'ts-morph';
import {getClasses} from 'ng-morph/classes';
import {getMethods} from 'ng-morph/methods';
import {getConstructors} from 'ng-morph/constructors';
import {getParams} from 'ng-morph/params';
import {getProperties} from 'ng-morph/properties';
import {getAccessors} from 'ng-morph/accessors';

export function getDecorators(
    declarations: DecoratableNode | DecoratableNode[],
    query?: Query<DecoratorStructure>,
): Decorator[] {
    return arrayFlat(
        coerceArray(declarations).map(declaration => declaration.getDecorators()),
    ).filter(decorator => matchQuery(decorator.getStructure(), query));
}

export const getAllDecorators = getDeclarationGetter<Decorator>(pattern => {
    const classes = getClasses(pattern);
    const methods = getMethods(classes);
    const constructors = getConstructors(classes);
    const properties = getProperties(classes);
    const constructorParams = getParams(constructors);
    const methodParams = getParams(methods);
    const accessors = getAccessors(classes);

    return arrayFlat(
        [classes, methods, properties, constructorParams, methodParams, accessors].map(
            declarations => getDecorators(declarations),
        ),
    );
});
