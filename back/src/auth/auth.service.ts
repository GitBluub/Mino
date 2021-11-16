import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class AuthService {

	constructor(
		private userService: UserService,
		private jwtService: JwtService
	) {}

	async validateUser(username: string, pass: string): Promise<any> {
		const user = await this.userService.findOne(username);
		if (user && bcrypt.compareSync(pass, user.password)) {
			return {
				username: user.name,
				userId: user.id
			};
		}
		return null;
	}

	async login(user: any) {
		const payload = { username: user.username, sub: user.userId };
		return {
		  access_token: this.jwtService.sign(payload),
		};
	}
}
