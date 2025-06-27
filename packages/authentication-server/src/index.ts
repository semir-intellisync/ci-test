/**
 * Authentication Server
 * Main entry point for the dummy authentication server package
 */

export interface AuthOptions {
  username?: string;
  password?: string;
  token?: string;
}

export interface AuthResult {
  success: boolean;
  token?: string;
  message?: string;
}

/**
 * Authenticates a user with username and password
 * @param options - Authentication options
 * @returns Authentication result with token
 */
export function authenticate(options: AuthOptions = {}): AuthResult {
  const { username, password } = options;
  
  if (!username || !password) {
    return {
      success: false,
      message: 'Username and password are required'
    };
  }
  
  // Mock authentication - in real implementation, this would validate against a database
  const mockToken = `token_${username}_${Date.now()}`;
  
  return {
    success: true,
    token: mockToken,
    message: 'Authentication successful'
  };
}

/**
 * Validates an authentication token
 * @param token - The token to validate
 * @returns Whether the token is valid
 */
export function validateToken(token: string): boolean {
  if (!token || !token.startsWith('token_')) {
    return false;
  }
  return true;
}

/**
 * Default export
 */
export default {
  authenticate,
  validateToken,
};

