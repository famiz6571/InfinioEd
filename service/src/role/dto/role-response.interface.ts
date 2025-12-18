import { Role } from "../role.model";

export interface RoleResponse {
  role: Role;
  status: 'success' | 'error';
  message: string;
}
