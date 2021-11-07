import { selectAuthenticated } from './authSelectors';

describe('Auth selectors', () => {
  describe('selectAuthenticated', () => {
    it('should return false, when auth.authenticated is false', () => {
      const mockState = { authenticated: false, user: null, error: '' };
      expect(selectAuthenticated.resultFunc(mockState)).toBe(false);
    });

    it('should return true, when auth.authenticated is true', () => {
      const mockState = { authenticated: true, user: null, error: '' };
      expect(selectAuthenticated.resultFunc(mockState)).toBe(true);
    });
  });
});
