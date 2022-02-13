import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {  Repository } from 'typeorm';
import { from, Observable } from 'rxjs';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  [x: string]: any;

  createUserDto: any;

 
  constructor(
    // @Inject(forwardRef(()=> UsersService),
    @InjectRepository(User)
    private readonly userRepo: Repository<User>
  ){

  }


  create(createUserDto: CreateUserDto): Observable<CreateUserDto>{
    
    return from(this.userRepo.save(createUserDto));
  }

  findAll() {
    return from(this.userRepo.find());
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userRepo.findOne({username});
  }

  
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  
}
