import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
loadmore:boolean=false
    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        var skip=0;
        var limit = 10
        this.loadAllUsers(skip,limit);
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => { 
            // this.loadAllUsers() 
        });
    }

    public loadAllUsers(skip:any,limit:any) {

        this.userService.getAll(skip,limit).pipe(first()).subscribe(users => { 
            this.users = users; 
            this.loadmore=true
        });
    }

    loadmoreusers(){
        this.userService.getAll(this.users.length,10).pipe(first()).subscribe(users => { 
            this.users = users; 
            this.users=[...users,...this.users]
             if(users.length)this.loadmore=true
             if(!users.length)this.loadmore=false
        });
    }
    clearStorage(){
        localStorage.clear()
    }
}