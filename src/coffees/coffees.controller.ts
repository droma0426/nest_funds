import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('flavours')
  findAll() {
    return 'this actions returns all the coffees';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `this actions returns #${id} coffees`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }
}
