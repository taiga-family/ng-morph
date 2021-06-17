import { ClassDeclaration } from 'ts-morph';

export interface PushToArrayOptions {
  readonly classDeclaration: ClassDeclaration;
  readonly decoratorName: string;
  readonly propertyName: string;
  readonly initializer: string;
  readonly unique?: boolean;
  readonly forceToArray?: boolean;
}
