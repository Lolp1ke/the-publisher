import axios from "axios";
import { MainConfig } from "@config/main";

export const Axios = axios.create({
	baseURL: MainConfig.BACKEND_HOST,
});
