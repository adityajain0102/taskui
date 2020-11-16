import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';



@Component({templateUrl: 'dashboard.component.html'})
export class DashboardComponent implements OnInit {
    currentUser: any;
    isAuditortole:boolean=false;

    constructor(private router:Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if(this.currentUser.role=='auditor'){
            this.isAuditortole= true
        }else {
            this.isAuditortole= false
        }
    }

    ngOnInit() {

    }
    logout(){
        localStorage.clear()
     this.router.navigate(['/home'])
    }
    navigateToAuditPage(){
     this.router.navigate(['/auditor'])

    }
}