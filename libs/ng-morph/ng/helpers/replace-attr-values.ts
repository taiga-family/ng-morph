import type {UpdateRecorder} from '@angular-devkit/schematics';

import type {DevkitFileSystem} from '../../project';
import type {ReplacementAttributeValue, TemplateResource} from '../types';
import {findElementsWithAttributeOnTag} from './elements';
import {getTemplateFromTemplateResource, getTemplateOffset} from './template-resource';

export function replaceAttrValues({
    resource,
    recorder,
    fileSystem,
    data,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    data: ReplacementAttributeValue[];
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    data.forEach(({attrNames, values, withTagNames}) => {
        const elements = [
            ...findElementsWithAttributeOnTag(template, attrNames, withTagNames),
        ];

        elements.forEach(element => {
            const {name, value} =
                element.attrs.find(attr =>
                    attrNames.map(name => name.toLowerCase()).includes(attr.name),
                ) || {};

            if (!name || !value) {
                return;
            }

            const attributeName = attrNames.find(
                attrName => attrName.toLowerCase() === name,
            );

            values.forEach(({from, to}) => {
                if (value === from) {
                    const {startOffset, endOffset} = element.sourceCodeLocation?.attrs?.[
                        name
                    ] || {startOffset: 0, endOffset: 0};

                    recorder.remove(
                        templateOffset + startOffset,
                        endOffset - startOffset,
                    );
                    recorder.insertRight(
                        templateOffset + startOffset,
                        `${attributeName}="${to}"`,
                    );
                }
            });
        });
    });
}
