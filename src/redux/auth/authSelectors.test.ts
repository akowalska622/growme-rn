import { selectIsAuthenticated } from './authSelectors';

describe('Auth selectors', () => {
  describe('selectIsAuthenticated', () => {
    it('should return false, when auth.isAuthenticated is false', () => {
      const mockState = { isAuthenticated: false, user: null, error: '' };
      expect(selectIsAuthenticated.resultFunc(mockState)).toBe(false);
    });

    it('should return true, when auth.isAuthenticated is true', () => {
      const mockState = { isAuthenticated: true, user: null, error: '' };
      expect(selectIsAuthenticated.resultFunc(mockState)).toBe(true);
    });
  });
});
