import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

interface LocalConfig {
  JWT_SECRET: string;
}

@Injectable()
export class LocalProviderService {
  constructor(private readonly configService: ConfigService) {}

  public getAllLocals(): LocalConfig {
    return {
      JWT_SECRET: this.configService.get<string>('JWT_SECRET') || 'long-secret',
    };
  }
}
