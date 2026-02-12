import { Component } from '@angular/core';
import { slideAnimationTrigger, slideDownAnimationTrigger } from 'src/app/animations/slide.animation';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
  animations:[slideAnimationTrigger, slideDownAnimationTrigger]
})
export class UserDashboardComponent {

  constructor(
    private readonly dialog: MatDialog,
    private readonly userService: UserService
  ) {

  }

  async openUserFormDialog(): Promise<void> {
    await import('../user-action/user-action.module');
    const { UserFormComponent } = await import('../user-action/user-form/user-form.component');

    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '520px',
      disableClose: true
    });

    dialogRef.afterClosed()
      .pipe(filter((result): result is IUser => !!result))
      .subscribe((newUser) => {
        this.userService.addUser(newUser);
      });
  }
  
}
