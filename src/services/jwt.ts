import { User } from "@prisma/client";
import jwt from "jsonwebtoken";
import { JWTUser } from "../interfaces";

const JWT_SECRET = "$UPER@1234";

class JWTService {
  public static generateTokenForUser(user: User) {
    const payload: JWTUser = {
      id: user?.id,
      email: user?.email,
    };

    const token = jwt.sign(payload, JWT_SECRET);
    return token;
  }
  
  public static decodeToken(token: string) {
    try {
      return jwt.verify(token, JWT_SECRET) as JWTUser;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
}

export default JWTService;
