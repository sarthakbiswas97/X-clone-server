import { User } from "@prisma/client";
import jwt from "jsonwebtoken";
import { prismaClient } from "../clients/db";

const JWT_SECRET = "$UPER@1234";

class JWTService {
  public static generateTokenForUser(user: User) {
    const payload = {
      id: user?.id,
      email: user?.email,
    };

    const token = jwt.sign(payload, JWT_SECRET);
    return token;
  }
}

export default JWTService;