/**
 * Shared form validation utilities used across all contact/lead forms.
 * Provides consistent validation rules and error messages.
 */

/** Validate full name: min 2 chars, only letters and spaces */
export function validateName(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return 'Name is required';
  if (trimmed.length < 2) return 'Name must be at least 2 characters';
  if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) return 'Name can only contain letters and spaces';
  return null;
}

/** Validate email with standard regex */
export function validateEmail(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return 'Email is required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return 'Please enter a valid email address';
  return null;
}

/** Validate mobile: exactly 10 digits (after stripping non-digit chars) */
export function validateMobile(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return 'Mobile number is required';
  const digits = trimmed.replace(/\D/g, '');
  if (digits.length < 10) return 'Please enter a valid 10-digit mobile number';
  if (digits.length > 15) return 'Mobile number is too long';
  return null;
}

/** Validate city: min 2 chars */
export function validateCity(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return 'City is required';
  if (trimmed.length < 2) return 'Please enter a valid city name';
  return null;
}

/** Validate a required select/dropdown field */
export function validateRequired(value: string, fieldLabel: string): string | null {
  if (!value || !value.trim()) return `Please select ${fieldLabel}`;
  return null;
}

/** Run all validators and return errors object. Empty = valid. */
export function validateContactForm(form: {
  interest?: string;
  name: string;
  mobile: string;
  email: string;
  city: string;
}): Record<string, string> {
  const errors: Record<string, string> = {};

  if (form.interest !== undefined) {
    const interestErr = validateRequired(form.interest, 'a program');
    if (interestErr) errors.interest = interestErr;
  }

  const nameErr = validateName(form.name);
  if (nameErr) errors.name = nameErr;

  const mobileErr = validateMobile(form.mobile);
  if (mobileErr) errors.mobile = mobileErr;

  const emailErr = validateEmail(form.email);
  if (emailErr) errors.email = emailErr;

  const cityErr = validateCity(form.city);
  if (cityErr) errors.city = cityErr;

  return errors;
}
