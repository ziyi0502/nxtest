import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule,AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
