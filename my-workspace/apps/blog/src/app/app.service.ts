import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getData(): { message: string } {
    console.log("dd");
    return { message: "Welcome to b" };
  }
}
