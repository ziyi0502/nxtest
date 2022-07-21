import { Controller, Get, UseGuards ,Request} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';


@Controller()
export class AppController {
  @UseGuards(LocalAuthGuard)
  @Get()
  getData(@Request() req) {
    return req.user;
  }
}
