import {type DecoratableNode, type DecoratorStructure, type OptionalKind} from 'ts-morph';

import {coerceArray} from '../utils';

export function addDecorators(
    nodes: DecoratableNode | DecoratableNode[],
    decorators:
        | Array<OptionalKind<DecoratorStructure>>
        | OptionalKind<DecoratorStructure>,
): void {
    coerceArray(nodes).forEach((node) => {
        node.addDecorators(coerceArray(decorators));
    });
}
