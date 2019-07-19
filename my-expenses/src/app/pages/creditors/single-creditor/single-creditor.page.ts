import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Creditor } from 'src/app/models/creditor';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CreditorService } from 'src/app/services/creditor.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-single-creditor',
  templateUrl: './single-creditor.page.html',
  styleUrls: ['./single-creditor.page.scss'],
})
export class SingleCreditorPage implements OnInit {

  form: FormGroup;

  creditor: Creditor;

  constructor(private navParams: NavParams,
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private creditorService: CreditorService,
    private loginService: LoginService) { }

  ngOnInit() {
    this.creditor = this.navParams.get('creditor_infos');
    this.form = this.formBuilder.group({
      name: new FormControl(this.creditor.name, Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])),
      amount: new FormControl(this.creditor.amount, Validators.compose([
        Validators.required,
        Validators.pattern('^[1-9][0-9]*$')
      ])),
      description: new FormControl(this.creditor.description, Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ]))
    });
  }

  closeModal() {
    this.creditorService.updateCreditor(this.creditor.id, this.creditor);
    this.modalCtrl.dismiss();
  }
}
