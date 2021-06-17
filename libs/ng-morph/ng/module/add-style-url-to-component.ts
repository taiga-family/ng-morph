import { pushToArrayProperty } from '../helpers/push-to-array-property';
import { AddStyleUrlsOptions } from './add-to-ng-options';

export function addStyleUrlToComponent({
  classDeclaration,
  styleUrl,
  unique,
}: AddStyleUrlsOptions) {
  pushToArrayProperty({
    classDeclaration,
    decoratorName: 'Component',
    propertyName: 'styleUrls',
    initializer: styleUrl,
    unique,
  });
}
