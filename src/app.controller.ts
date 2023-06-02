import { Controller, Get, Post, Body, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { SDKRequestDto } from './dtos';
import { VerifyingUserOpMiddlewareDataType } from './types';
import { PAYMASTER_DATA } from './decorator';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('sign/user-op')
  async SignMessage(@Body() signingDto: SDKRequestDto) {
    console.log('signingDto');
    console.log(signingDto);
    const { params } = signingDto;
    const paymasterAndData = await this.appService.signUserOpMessage(
      params[0],
      params[1],
    );
    return {
      statusCode: HttpStatus.OK,
      data: {
        paymasterAndData,
      },
    };
  }
  @Post('relay')
  async relay(@Body() reqBody: any) {
    const paymasterAndData = await this.appService.relay(reqBody);
    return {
      code: HttpStatus.OK,
      data: {
        paymasterAndData,
      },
    };
  }
}
