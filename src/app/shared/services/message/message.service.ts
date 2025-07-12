import { Injectable } from '@angular/core';

import { NzNotificationPlacement, NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable()
export class MessageService {

  constructor(
    private readonly nzNotificationService: NzNotificationService
  ) { }

  public showSuccessNotification(
    message: string,
    placement: NzNotificationPlacement
  ): void {
    this.nzNotificationService.success(
      message,
      '',
      { nzPlacement: placement }
    );
  }

  public showErrorNotification(
    message: string,
    placement: NzNotificationPlacement
  ): void {
    this.nzNotificationService.error(
      message,
      '',
      { nzPlacement: placement }
    );
  }
}
