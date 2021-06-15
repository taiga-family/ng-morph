import { ClassDeclaration } from 'ts-morph';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addStyleUrlToComponent(
  classDeclaration: ClassDeclaration,
  styleUrl: string
) {
  pushToArrayProperty(classDeclaration, 'Component', 'styleUrls', styleUrl);
}
