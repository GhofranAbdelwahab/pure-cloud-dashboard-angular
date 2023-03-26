export class Table {
    private id: number;
    private tableSize: number;
    private available: boolean;


    constructor(id: number, tableSize: number, available: boolean) {
        this.id = id;
        this.tableSize = tableSize;
        this.available = available;
    }
}
