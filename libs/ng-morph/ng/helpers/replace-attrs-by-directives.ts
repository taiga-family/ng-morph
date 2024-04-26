import type {DevkitFileSystem} from '../../project';
import type {Pattern} from '../../utils';
import type {ReplacementAttributeToDirective, TemplateResource} from '../types';
import {replaceInputPropertyByDirective} from './ng-component-input-manipulations';

export function replaceAttrsByDirective({
    resource,
    fileSystem,
    data,
    pattern,
}: {
    fileSystem: DevkitFileSystem;
    resource: TemplateResource;
    data: ReplacementAttributeToDirective[];
    pattern: Pattern;
}): void {
    data.forEach(
        ({componentSelector, directiveModule, directive, inputProperty, filterFn}) => {
            replaceInputPropertyByDirective({
                componentSelector,
                directiveModule,
                directive,
                inputProperty,
                fileSystem,
                templateResource: resource,
                filterFn,
                pattern,
            });
        },
    );
}
