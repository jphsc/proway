import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  private snackBarConfig:MatSnackBarConfig = {
    duration: 2000,
    verticalPosition: 'top',
    horizontalPosition: 'center'
  }

  constructor(private snackBar: MatSnackBar) { }

  notificar(msg: string){
    this.snackBar.open(msg, "Ok", this.snackBarConfig)
  }
}
