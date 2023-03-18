import { Controller, Get, Post, Body, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { SigningUserOpDto } from './dtos'
import { VerifyingUserOpMiddlewareDataType } from './types'
import { PAYMASTER_DATA } from './decorator'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('signing-service')
  async SignMessage(
  @Body() signingDto: SigningUserOpDto,
  ) {
    const { userOp } = signingDto;
    const paymasterAndData = await this.appService.signUserOpMessage(userOp);
    return {
      code: HttpStatus.OK,
      data: {
        paymasterAndData,
      },
    };
  }
  @Post('relay')
  async relay(
  @Body() reqBody: any,
  ) {
    const paymasterAndData = await this.appService.relay(reqBody);
    return {
      code: HttpStatus.OK,
      data: {
        paymasterAndData,
      },
    };
  }
}
