import {type Decorator} from 'ts-morph';

import {getDeclarationRemover} from '../utils';

export const removeDecorators = getDeclarationRemover<Decorator>();
