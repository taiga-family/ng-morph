import type {Tree} from '@angular-devkit/schematics';
import {getWorkspace} from '@schematics/angular/utility/workspace';

export async function isInvalidAngularJson(tree: Tree): Promise<boolean> {
    return (
        getWorkspace(tree)
            // eslint-disable-next-line no-restricted-syntax
            .then(() => false)
            /**
             * Possible error – "Invalid format version detected - Expected:[ 1 ] Found: [ 2 ]"
             * @see https://github.com/angular/angular-cli/blob/main/packages/angular_devkit/core/src/workspace/json/reader.ts#L67-L69
             */
            // eslint-disable-next-line no-restricted-syntax
            .catch(() => true)
    );
}
