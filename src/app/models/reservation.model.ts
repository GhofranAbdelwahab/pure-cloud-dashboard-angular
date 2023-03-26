import { TokenModel } from './token.model';
import { Table } from './tables.model';

export class ReservationModel {
    private id: number;
    private reservationAppointment: string;
    private user: TokenModel;
    private table: Table;


    constructor(id: number, reservationAppointment: string, user: TokenModel, table: Table) {
        this.id = id;
        this.reservationAppointment = reservationAppointment;
        this.user = user;
        this.table = table;
    }
}
