export class TableRequest {
    private tableSize: number;
    private available: boolean;


    constructor(tableSize: number, available: boolean) {
        this.tableSize = tableSize;
        this.available = available;
    }
}
