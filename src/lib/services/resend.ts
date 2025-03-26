import "server-only";

import { Resend } from "resend";
import { env } from "../services/env";

export const resend = new Resend(env.RESEND_API_KEY);
