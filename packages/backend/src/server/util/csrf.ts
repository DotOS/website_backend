import csrf from "csurf";

const cookieOptions = {
	signed: true,
	secure: true,
	maxAge: 60 * 60 * 1000,
	httpOnly: true
};

export const csrfProtection = csrf({
	cookie: cookieOptions
});
