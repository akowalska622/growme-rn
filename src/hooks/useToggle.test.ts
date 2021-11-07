import { act, renderHook } from '@testing-library/react-hooks';

import { useToggle } from './useToggle';

it('should return [false, function], when no initial value is passed', () => {
  const { result } = renderHook(() => useToggle());
  const [value, toggleValue] = result.current;
  expect(value).toBe(false);
  expect(typeof toggleValue).toBe('function');
});

it('should return [!value, function], when function is called', () => {
  const initialValue = true;
  const { result } = renderHook(() => useToggle(initialValue));

  const [value, toggleValue] = result.current;
  expect(value).toBe(initialValue); // true

  act(() => toggleValue());
  const [afterValue] = result.current;
  expect(afterValue).toBe(!initialValue); // false
});
