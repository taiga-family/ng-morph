import type {UpdateRecorder} from '@angular-devkit/schematics';

import type {DevkitFileSystem} from '../../project';
import type {ReplacementTag, TemplateResource} from '../types';
import {findElementsByTagName} from './elements';
import {replaceTag} from './replace-tag';
import {getTemplateFromTemplateResource, getTemplateOffset} from './template-resource';

export function replaceTags({
    resource,
    recorder,
    fileSystem,
    data,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    data: readonly ReplacementTag[];
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    data.forEach(({from, to, addAttributes, filterFn}) => {
        const elements = findElementsByTagName(template, from, filterFn);

        elements.forEach(({sourceCodeLocation}) => {
            if (sourceCodeLocation) {
                replaceTag(
                    recorder,
                    sourceCodeLocation,
                    from,
                    to,
                    templateOffset,
                    addAttributes,
                );
            }
        });
    });
}
