import { HTTP } from "./enums";

export interface iError {
  name: string;
  message: string;
  status: HTTP;
  success: boolean;
}
