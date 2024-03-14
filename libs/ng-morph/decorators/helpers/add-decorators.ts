import {coerceArray} from 'ng-morph/utils';
import type {DecoratableNode, DecoratorStructure, OptionalKind} from 'ts-morph';

export function addDecorators(
    nodes: DecoratableNode | DecoratableNode[],
    decorators:
        | Array<OptionalKind<DecoratorStructure>>
        | OptionalKind<DecoratorStructure>,
): void {
    coerceArray(nodes).forEach(node => {
        node.addDecorators(coerceArray(decorators));
    });
}
