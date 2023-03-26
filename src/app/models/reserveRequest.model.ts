export class ReserveRequestModel {
    public user_id: number;
    public personsCount: number;
    public reservationAppointment: string;

    constructor(user_id: number, personsCount: number, reservationAppointment: string) {
        this.user_id = user_id;
        this.personsCount = personsCount;
        this.reservationAppointment = reservationAppointment;
    }
}
