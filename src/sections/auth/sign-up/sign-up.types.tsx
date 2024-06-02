export interface ErrorFields {
  username?: string | boolean;
  fullName?: string | boolean;
  email?: string | boolean;
  phone?: string | boolean;
  city?: string | boolean;
  postalCode?: string | boolean;
  country?: string | boolean;
}

export interface ValidationRule {
  field: keyof ErrorFields;
  message: string;
  validate: (value: string) => boolean;
}
