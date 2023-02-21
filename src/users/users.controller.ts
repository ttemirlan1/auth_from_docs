import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from 'src/auth/guard/local.auth.guard';

@Controller('users')
export class UsersController {
  @Get()
  async allusers() {
    return await 'returned all users';
  }
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}
