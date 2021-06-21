import { ClassDeclaration } from 'ts-morph';

export interface AddToNgOptions {
  classDeclaration: ClassDeclaration;
  unique?: boolean;
}

export interface AddComponentOptions extends AddToNgOptions {
  component: string;
}

export interface AddDeclarationOptions extends AddToNgOptions {
  declaration: string;
}

export interface AddExportOptions extends AddToNgOptions {
  exportName: string;
}

export interface AddImportOptions extends AddToNgOptions {
  moduleName: string;
}

export interface AddProviderOptions extends AddToNgOptions {
  provider: string;
}

export interface AddSchemaOptions extends AddToNgOptions {
  schema: string;
}

export interface AddStyleUrlsOptions extends AddToNgOptions {
  styleUrl: string;
}
