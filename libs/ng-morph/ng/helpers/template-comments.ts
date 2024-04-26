import type {UpdateRecorder} from '@angular-devkit/schematics';

import type {DevkitFileSystem} from '../../project';
import type {HtmlComment, TemplateResource} from '../types';
import {findElementsWithAttributeOnTag} from './elements';
import {TODO_MARK} from './insert-todo';
import {getTemplateFromTemplateResource, getTemplateOffset} from './template-resource';

export function addHTMLCommentTags({
    resource,
    recorder,
    fileSystem,
    data,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    data: readonly HtmlComment[];
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    data.forEach(({comment, tag, withAttrs}) => {
        const elementStartOffsets = [
            ...findElementsWithAttributeOnTag(template, withAttrs, [tag]),
            ...findElementsWithAttributeOnTag(
                template,
                withAttrs.map(attr => `[${attr}]`),
                [tag],
            ),
        ].map(
            ({sourceCodeLocation}) =>
                (sourceCodeLocation?.startOffset || 0) + templateOffset,
        );

        elementStartOffsets.forEach(offset => {
            recorder.insertLeft(offset, `<!-- ${TODO_MARK} ${comment} -->\n`);
        });
    });
}
