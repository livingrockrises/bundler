/* eslint-disable max-classes-per-file */
import {
    IsNotEmpty,
    IsNotEmptyObject, IsNumber, IsString, ValidateNested,
  } from 'class-validator';
  import { Type } from 'class-transformer';
  import { UserOpType } from './types';
  export class NestedUserOpDto {
    @IsNotEmpty()
    @IsString()
      sender: string;
  
    @IsNotEmpty()
    @IsNumber()
      nonce: number;
  
    @IsNotEmpty()
    @IsString()
      initCode: string;
  
    @IsNotEmpty()
    @IsString()
      callData: string;
  
    @IsNotEmpty()
    @IsNumber()
      callGasLimit: number;
  
    @IsNotEmpty()
    @IsNumber()
      verificationGasLimit: number;
  
    @IsNotEmpty()
    @IsNumber()
      maxFeePerGas: number;
  
    @IsNotEmpty()
    @IsNumber()
      maxPriorityFeePerGas: number;
  
    @IsNotEmpty()
    @IsNumber()
      preVerificationGas: number;
  
    @IsNotEmpty()
    @IsString()
      paymasterAndData: string;
  
    @IsNotEmpty()
    @IsString()
      signature: string;
  }
  export class SigningUserOpDto {
    @IsNotEmptyObject()
    @ValidateNested()
    @Type(() => NestedUserOpDto)
      userOp: UserOpType;
  
    // @IsNotEmpty()
    //   metaData: MetaDataType;
  }