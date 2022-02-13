import {forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';


@Module({
  imports :[
    TypeOrmModule.forFeature([User],),
    forwardRef(() => AuthModule)],
    providers: [UsersService],
    controllers: [UsersController],
    exports: [UsersService]
  })
export class UsersModule {}



