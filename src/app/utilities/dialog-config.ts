import {MatDialogConfig} from '@angular/material';

export class DialogConfig {
  static createDialogConfig = (data?): MatDialogConfig => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.closeOnNavigation = true;
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    if (data) {
      dialogConfig.data = data;
    }

    return dialogConfig;
  };
}
