export class ErrorModel {
    public error: string;
    public description: string;
    public error_description: string;


    constructor(error: string, description: string, error_description: string) {
        this.error = error;
        this.description = description;
        this.error_description = error_description;
    }
}
