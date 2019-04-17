export class AuthService {
  private userLoggedIn: boolean = false;

  constructor() {}

  public isAuthenticated() {
    return this.userLoggedIn;
  }

  public signInUser(username: string, password: string) {
    if (username == "admin" && password == "admin") {
      this.userLoggedIn = true;
    }
  }

  public signOutUser() {
    this.userLoggedIn = false;
  }
}
