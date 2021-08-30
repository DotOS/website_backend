import APIController from "@/controllers/api";
import StatsController from "@/controllers/statistics";

import App from "./server/app";
import { port } from "./server/config";

const app = new App([new StatsController(), new APIController()]);

app.listen(port);
