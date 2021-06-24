import { ClassDeclaration } from 'ts-morph';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addStyleUrlToComponent(
  classDeclaration: ClassDeclaration,
  styleUrl: string,
  { unique }: { unique: boolean } = { unique: false }
) {
  pushToArrayProperty(classDeclaration, 'Component', 'styleUrls', styleUrl, {
    unique,
  });
}
