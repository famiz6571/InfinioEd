import { UseGuards, Controller, Post, Body, Get, Param, Patch } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { CreateStudentDto } from "./dto/create-student.dto";
import { UpdateStudentDto } from "./dto/update-student.dto";
import { StudentService } from "./student.service";

@UseGuards(JwtAuthGuard)
@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  create(@Body() dto: CreateStudentDto) {
    return this.studentService.create(dto);
  }

  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateStudentDto) {
    return this.studentService.update(id, dto);
  }
}
