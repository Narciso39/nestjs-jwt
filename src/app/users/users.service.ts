import { Injectable, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto); // Cria a entidade em memória
    return await this.userRepository.save(user); 
  }

  async findAll() {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    await this.exists(id);
    return this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.exists(id);
    return this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    await this.exists(id);
    return this.userRepository.delete(id);
  }

  // função para verificar se o usuário existe
  async exists(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`o usuário ${id} não existe`);
    }
  }
}
