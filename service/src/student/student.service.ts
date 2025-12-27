import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Student } from './student.model';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { HashService } from '../common/hash/hash.service';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student) private studentModel: typeof Student,
    private readonly hashService: HashService,
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    const hashedPassword = await this.hashService.hash(
      createStudentDto.password,
    );
    const dto = {
      ...createStudentDto,
      password: hashedPassword,
    };
    await this.studentModel.create(dto as Student);
    return { status: 'success', message: 'Student created successfully' };
  }

  findAll() {
    return this.studentModel.findAll({
      include: ['bankAccounts'],
      order: [['createdAt', 'DESC']],
    });
  }

  async findOne(studentId: string) {
    const student = await this.studentModel.findByPk(studentId);
    if (!student) throw new NotFoundException('Student not found');
    return student;
  }

  async update(studentId: string, dto: UpdateStudentDto) {
    const student = await this.studentModel.findByPk(studentId);
    if (!student) throw new NotFoundException('Student not found');

    if (dto.password) {
      dto.password = await this.hashService.hash(dto.password);
    }

    await student.update(dto);
    return { status: 'success', message: 'Student updated successfully' };
  }
}
