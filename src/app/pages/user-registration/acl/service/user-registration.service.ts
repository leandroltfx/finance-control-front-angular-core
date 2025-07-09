import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { UserRegistrationProxyService } from '../proxy/user-registration-proxy.service';
import { UserRegistrationRequestDto } from '../../dto/request/user-registration-request-dto';
import { UserRegistrationAdapterService } from '../adapter/user-registration-adapter.service';
import { UserRegistrationResponseContract } from '../../contracts/response/user-registration-response-contract';

@Injectable()
export class UserRegistrationService {

  constructor(
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
          console.log(this.userRegistrationAdapterService.responseToDto(userRegistrationResponseContract));
        },
        error: (httpErrorResponse: HttpErrorResponse) => {
          console.log(httpErrorResponse);
        }
      }
    );
  }
}
