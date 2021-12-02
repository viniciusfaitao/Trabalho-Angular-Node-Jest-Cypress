import { Component, OnInit } from '@angular/core'
import { Veterinary } from 'src/app/shared/models/veterinary'
import { VeterinaryService } from 'src/app/shared/services/veterinary-service/veterinary.service'
import { Contact } from './../../shared/models/contact';



@Component({
  selector: 'app-veterinary-list',
  templateUrl: './veterinary-list.component.html',
  styleUrls: ['./veterinary-list.component.scss'],
})
export class VeterinaryListComponent implements OnInit {
  filteredVeterinary: Contact[] = []
  _veterinary: any[] = []
  _filterBy: string

  constructor(private veterinaryService: VeterinaryService) { }

  ngOnInit(): void {
    this.retrieveAll()
  }

  retrieveAll(): void {
    this.veterinaryService.retriveAll().subscribe({
      next: veterinary => {
        this._veterinary = veterinary
        console.log("this.veterinary", this._veterinary)
        this.filteredVeterinary = this._veterinary
      },
      error: err => console.log('Error', err),
    })
  }

  deleteById(veterinaryId: number): void {
    this.veterinaryService.deleteById(veterinaryId).subscribe({
      next: () => {
        console.log('Deleted with success')
        this.retrieveAll()
      },
      error: err => console.log('Error', err),
    })
  }

  set filter(value: string) {
    this._filterBy = value

    this.filteredVeterinary = this._veterinary.filter(
      (veterinary: Contact) =>
      (veterinary.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1 ||
        veterinary.email.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1 ||
        veterinary.phone.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1
      )
    )
  }

  get filter(): string {
    return this._filterBy
  }
}
