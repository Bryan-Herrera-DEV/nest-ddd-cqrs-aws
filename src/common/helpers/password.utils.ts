import * as bcrypt from 'bcrypt';

export async function encryptPassword(password: string): Promise<string> {
  const saltRounds = 15;
  return await bcrypt.hash(password, saltRounds);
}

export async function comparePasswords(
  providedPassword: string,
  storedPassword: string,
): Promise<boolean> {
  return await bcrypt.compare(providedPassword, storedPassword);
}