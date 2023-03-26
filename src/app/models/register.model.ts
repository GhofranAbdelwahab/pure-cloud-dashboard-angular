export class RegisterRequest {
    private name: string;
    private email: string;
    private mobileNumber: string;
    private password: string;

    constructor(password: string, name: string, email: string, mobileNumber: string) {
        this.password = password;
        this.name = name;
        this.email = email;
        this.mobileNumber = mobileNumber;
    }
}
