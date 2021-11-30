import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Contact } from 'src/app/shared/models/contact';
import { VeterinaryService } from 'src/app/shared/services/veterinary-service/veterinary.service'

@Component({
  selector: 'app-veterinary-info',
  templateUrl: './veterinary-info.component.html',
  styleUrls: ['./veterinary-info.component.scss'],
})
export class VeterinaryInfoComponent implements OnInit {
  veterinary: Contact = {
    id: undefined,
    name: '',
    email: '',
    phone: '',
  }

  paramId: number;
  isANewVeterinary: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private veterinaryService: VeterinaryService) { }

  ngOnInit(): void {
    this.paramId = +this.activatedRoute.snapshot.paramMap.get('id');

    if (this.paramId) {
      this.isANewVeterinary = false

      this.veterinaryService.retrieveById(this.paramId).subscribe({
        next: veterinary => (this.veterinary = veterinary),
        error: err => console.log('Error', err),
      })
    } else {
      this.isANewVeterinary = true
    }
  }

  save(): void {
    this.veterinaryService.save(this.veterinary).subscribe({
      next: veterinary => console.log('Saved with sucess', veterinary.id),
      error: err => console.log('Error', err),
    })
  }
}
