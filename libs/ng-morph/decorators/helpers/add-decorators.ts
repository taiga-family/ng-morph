import {DecoratableNode, DecoratorStructure, OptionalKind} from 'ts-morph';
import {coerceArray} from 'ng-morph/utils';

export function addDecorators(
    nodes: DecoratableNode | DecoratableNode[],
    decorators: OptionalKind<DecoratorStructure> | OptionalKind<DecoratorStructure>[],
) {
    coerceArray(nodes).forEach(node => {
        node.addDecorators(coerceArray(decorators));
    });
}
