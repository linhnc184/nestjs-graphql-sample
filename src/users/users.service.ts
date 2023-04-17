import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

const users = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
  { id: 3, name: 'c' },
];

@Injectable()
export class UsersService {
  create(createUserInput: CreateUserInput) {
    const newUser = {
      id: Math.max(...users.map(user => user.id)) + 1,
      ...createUserInput
    };

    users.push(newUser);

    return newUser;
  }

  findAll() {
    return users;
  }

  findOne(id: number) {
    return users.find(user => user.id ===  +id);
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    console.log(id);
    
    const user = users.find(user => user.id ===  +id);

    if (!user) {
      throw new Error('not found');
    }

    user.name = updateUserInput.name;

    return user;
  }

  remove(id: number) {
    const index = users.findIndex(user => user.id ===  +id);

    if (index < 0) {
      return {
        success: false
      };
    }

    users.splice(index, 1);

    return {
      success: true
    };
  }
}
