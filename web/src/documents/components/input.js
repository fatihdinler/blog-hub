/**
 * Input component is used to display an input field with various options.
 * @prop {string} name - The name attribute for the input element.
 * @prop {string} type - The type of input (e.g., 'text', 'password', 'email').
 * @prop {string} value - The initial value of the input.
 * @prop {string} placeholder - The placeholder text for the input.
 * @prop {string} id - The ID attribute for the input element.
 * @prop {string} icon - The icon class to be displayed inside the input field.
 * @prop {string} helperText - Additional helper text to display below the input.
 * @function onChangePasswordVisibility - It handles the value that passed through this component via Redux Toolkit state.
 * @returns {JSX.Element} - Returns the input component with specified properties.
 *
 * @example
 * // Basic usage
 * <Input
 *   name='email'
 *   type='email'
 *   placeholder='johndoe@example.com'
 *   icon='fi-rr-envelope'
 *   helperText='Email'
 * />
 *
 * // Password input with visibility toggle
 * <Input
 *   name='password'
 *   type='password'
 *   placeholder='Password'
 *   icon='fi-rr-key'
 *   helperText='Password'
 * />
 */
