import { Router } from "express";

export default interface Controller {
	name: string;
	path: string;
	subdomain: string | null;
	router: Router;
}
