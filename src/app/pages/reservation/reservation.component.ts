import { Component, OnInit, OnChanges } from '@angular/core';
import { Shared } from '../../models/shared.model';
import { ReserveRequestModel } from 'src/app/models/reserveRequest.model';
import { ReservationService } from 'src/app/services/reservation.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit, OnChanges {
  reservationPersonCount: number;
  reservationDateTime: string;
  constructor(private router: Router, private reservationService: ReservationService, private shared: Shared) { }

  ngOnInit() {

  }
  ngOnChanges() {

  }


  public onReserve() {
    const data =  new ReserveRequestModel(1, this.reservationPersonCount, this.reservationDateTime);
    this.reservationService.reserve_by_datetime(data).subscribe(
      res => {
        alert('Reservation Done Successfully');
        this.router.navigate(['/user-profile']);
      },
      err => {
        alert('An error has occurred');
      }
    );
    }
}
