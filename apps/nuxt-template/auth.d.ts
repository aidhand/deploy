declare module "#auth-utils" {
  interface User {
    email: string;
    firstName?: string;
    lastName?: string;
  }

  interface UserSession {
    loggedInAt: Date;
  }

  interface SecureSessionData {
    apiToken: string;
  }
}

export {};
