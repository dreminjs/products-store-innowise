import z from "zod";
import { LoginDtoSchema } from "./login.schema";
import { Tokens } from "@shared/model/interfaces/tokens.interfaces";
import { IUser } from "@modules/Users";

export type TLoginFormDto = z.infer<typeof LoginDtoSchema>;

export type TLoginResponse = IUser & Tokens;
