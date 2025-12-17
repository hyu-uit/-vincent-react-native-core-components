export interface ThemeColors {
  // Neutrals
  /** White color - used for backgrounds, selected states */
  white: string;
  /** Black color - used for primary text, labels */
  black: string;

  // Grays
  /** Light gray background - used for secondary button backgrounds, tabs container, disabled backgrounds, skeleton backgrounds */
  gray100: string;
  /** Light gray border/divider - used for divider lines, form select/textarea borders, button outline borders */
  gray200: string;
  /** Default gray border - used for input borders (TextInput, PasswordInput, NumberInput, Checkbox) */
  gray300: string;
  /** Muted gray text - used for placeholders, icons, secondary text, labels, disabled text */
  gray400: string;

  // Primary
  /** Primary brand color - used for primary buttons, focus borders, active states, selection cursor */
  primary: string;

  // Danger / Error
  /** Danger color - used for danger buttons, error states */
  danger: string;
  /** Light danger background - used for danger button backgrounds */
  dangerLight: string;
  /** Error color - used for error messages, error borders, required field indicators */
  error: string;

  // Disabled
  /** Disabled background color - used for disabled input/button backgrounds */
  disabled: string;
  /** Disabled text color - used for disabled text (same as gray400) */
  disabledText: string;

  // Transparent
  /** Transparent color - used for transparent backgrounds */
  transparent: string;
}

export interface Theme {
  colors: ThemeColors;
}
