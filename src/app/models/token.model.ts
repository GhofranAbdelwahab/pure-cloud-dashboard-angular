export class TokenModel {
    public access_token: string;
    public token_type: string;
    public expires_in: string;


    constructor(access_token: string, token_type: string, expires_in: string) {
        this.access_token = access_token;
        this.token_type = token_type;
        this.expires_in = expires_in;
    }
}
