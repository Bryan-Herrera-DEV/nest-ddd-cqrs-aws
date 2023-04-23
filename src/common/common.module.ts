import { Module } from '@nestjs/common';
import { LocalProviderService } from './services/local-provider/local-provider.service';

@Module({
  providers: [LocalProviderService],
  exports: [LocalProviderService],
})
export class CommonModule {}
