import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const PAYMASTER_DATA = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.paymasterData; // extract data from request
  },
);