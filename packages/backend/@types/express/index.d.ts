declare namespace Express {
	export interface Request {
		loggedUser: JWTToken;
	}
}
