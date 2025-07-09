import { Injectable } from '@angular/core';

import { UserRegistrationRequestDto } from '../../dto/request/user-registration-request-dto';
import { UserRegistrationResponseDto } from '../../dto/response/user-registration-response-dto';
import { UserRegistrationRequestContract } from '../../contracts/request/user-registration-request-contract';
import { UserRegistrationResponseContract } from '../../contracts/response/user-registration-response-contract';

@Injectable()
export class UserRegistrationAdapterService {

  constructor() { }

  public dtoToRequest(
    userRegistrationRequestDto: UserRegistrationRequestDto
  ): UserRegistrationRequestContract {
    return {
      userName: userRegistrationRequestDto.userName,
      email: userRegistrationRequestDto.email,
      password: userRegistrationRequestDto.password
    }
  }

  public responseToDto(
    userRegistrationResponseContract: UserRegistrationResponseContract
  ): UserRegistrationResponseDto {
    return {
      message: userRegistrationResponseContract.message
    }
  }
}
