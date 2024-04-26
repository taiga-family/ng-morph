import {getSourceFiles} from '../../source-file';
import type {Pattern} from '../types/pattern';

export function replaceText(
    replaceable: Array<{from: RegExp | string; to: string}>,
    pattern: Pattern,
): void {
    const sourceFiles = getSourceFiles(pattern);

    sourceFiles.forEach(file => {
        let text = file.getFullText();

        replaceable.forEach(({from, to}) => {
            const regexp = new RegExp(from, 'g');

            if (text.match(regexp)) {
                text = text.replace(regexp, to);
            }
        });

        file.replaceWithText(text);
    });
}
