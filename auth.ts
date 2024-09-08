"use server"

import { genSalt, hash, compare } from "bcrypt-ts";
import { users } from "@/db/schema/user";
import db from "./db";
import { eq } from "drizzle-orm";
import { redirect, RedirectType } from "next/navigation";
import { cookies } from 'next/headers'
import * as jose from 'jose'
const fs = require('fs');

const saltRounds = 10; // You can adjust this value as needed

export async function login(prevState: any, formData: FormData) {
    // Get form data
    const user = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    }

    // find user in DB
    const userDB = await findUser(user.email);
    if (!userDB || !userDB.email || !userDB.password){
        return { message: "Usuario no encontrado.",  }
    }

    // Authenticate user
    const userIsAutenticated = await compare(user.password, userDB?.password as string);
    if (!userIsAutenticated) {
        return { message: "Contraseña incorrecta." }
    }

    // Generate JWT
    const secretKey = await jose.importJWK(JSON.parse(process.env.JWK_KEY as string))
    const jwt = await new jose.SignJWT({
        id: '12345'
    })
        .setProtectedHeader({ alg: 'HS256' }) // algorithm
        .setIssuedAt()
        .setExpirationTime("30 mins") // token expiration time, e.g., "1 day"
        .sign(secretKey); // secretKey generated from previous step

    cookies().set("Authorization", `Bearer ${jwt}`)
    redirect(`/admin/`);
}

async function findUser(email: string) {
    return await db.query.users.findFirst({ where: eq(users.email, email) });
}

export async function generatePassword(email: string, password: string) {
    const salt = await genSalt(saltRounds);

    const hashedPassword = await hash(password, salt);
    await db.insert(users).values({ email: email, password: hashedPassword, createdAt: new Date() })
}

export async function logout() {
    "use server"
    cookies().delete("Authorization");
    redirect("/admin");
}