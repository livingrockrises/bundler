/* eslint-disable max-classes-per-file */
import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class SDKRequestDto {
  method: string;
  id: number;
  params: Array<any>;
  jsonrpc: string;
}
