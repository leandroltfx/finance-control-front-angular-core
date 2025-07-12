import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { MessageService } from '../../../../shared/services/message/message.service';
import { UserRegistrationProxyService } from '../proxy/user-registration-proxy.service';
import { UserRegistrationRequestDto } from '../../dto/request/user-registration-request-dto';
import { UserRegistrationAdapterService } from '../adapter/user-registration-adapter.service';
import { UserRegistrationResponseDto } from '../../dto/response/user-registration-response-dto';
import { UserRegistrationResponseContract } from '../../contracts/response/user-registration-response-contract';

@Injectable()
export class UserRegistrationService {

  constructor(
    private readonly messageService: MessageService,
    private readonly userRegistrationProxyService: UserRegistrationProxyService,
    private readonly userRegistrationAdapterService: UserRegistrationAdapterService
  ) { }

  public registerUser(
    userRegistrationRequestDto: UserRegistrationRequestDto
  ): void {
    this.userRegistrationProxyService.registerUser(
      this.userRegistrationAdapterService.dtoToRequest(userRegistrationRequestDto)
    ).subscribe(
      {
        next: (userRegistrationResponseContract: UserRegistrationResponseContract) => {
          const userRegistrationResponseDto: UserRegistrationResponseDto = (this.userRegistrationAdapterService.responseToDto(userRegistrationResponseContract));
          this.messageService.showSuccessNotification(userRegistrationResponseDto.message, 'top');
        },
        error: (httpErrorResponse: HttpErrorResponse) => {
          this.messageService.showErrorNotification(httpErrorResponse.error.message, 'top');
        }
      }
    );
  }
}
