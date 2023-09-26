import { UserM, UserWithoutPassword } from '../../user/model/user';
import { UserRepository } from 'src/user/model/userRepository.interface';
import { DatabaseUserRepository } from 'src/user/model/userRepository.mongoose';

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class IsAuthenticatedService {
    constructor(
        @Inject(DatabaseUserRepository)
        private readonly adminUserRepo: UserRepository,
    ) {}

    async execute(username: string): Promise<UserWithoutPassword> {
        const user: UserM = await this.adminUserRepo.getUserByUsername(username);
        const { password, ...info } = user;
        return info;
    }
}
