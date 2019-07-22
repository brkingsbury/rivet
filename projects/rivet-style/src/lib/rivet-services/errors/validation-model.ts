import { UniqueNameService } from '@admin/app/services/unique-name-service';

export class ValidationModel {
  isRequired?: boolean = false;
  uniqueNameService?: UniqueNameService = null;
  validateUniqueName?: boolean = false;
  currentId?: number = 0;
  validateSpecialCharacters?: boolean = false;
  supportedSpecialCharacters?: string[] = [];
  propertyName: string = '';
  maxLength?: number;
  cannotHaveSpaces?: boolean = false;
  cannotBeOnlySpaces?: boolean = false;
  requireAutoCompleteMatch?: boolean = false;
  validateNumber?: boolean = false;
  validateDate?: boolean = false;
}
