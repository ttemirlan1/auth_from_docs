import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { DB_CONFIG } from './db.config/db.config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(DB_CONFIG), AuthModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
