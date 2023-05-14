export class LoginRequestBody {
    email: string;
    password: string;
  
    constructor(email: string, password: string) {
      this.email = email;
      this.password = password;
    }
  
    validModel(): { [key: string]: string } {
      return {
        email: this.email,
        password: this.password,
      };
    }
  
    // Add more methods here for different form data payloads if needed
  }
  