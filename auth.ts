"use server"

import { genSalt, hash, compare } from "bcrypt-ts";
import { users } from "@/db/schema/user";
import db from "./db";
import { eq } from "drizzle-orm";
import { redirect, RedirectType } from "next/navigation";
import { cookies } from 'next/headers'
import * as jose from 'jose'
const fs = require('fs');

import { createSecretKey } from "crypto";

const saltRounds = 10; // You can adjust this value as needed

export async function generatePassword(email: string, password: string) {
    const salt = await genSalt(saltRounds);

    const hashedPassword = await hash(password, salt);
    await db.insert(users).values({ email: email, password: hashedPassword, createdAt: new Date() })
}

export async function login(formData: FormData) {
    const user = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    }

    const userIsAutenticated = await autenticateUser(user.email, user.password);
    if (userIsAutenticated) {
        const secretKey = createSecretKey("dasdadasdadadadadsadadada", 'utf-8');
        fs.writeFileSync('./test.txt', JSON.stringify(secretKey.export({ format: "jwk" })));
        const jwt = await new jose.SignJWT({
            id: '12345'
        })
            .setProtectedHeader({ alg: 'HS256' }) // algorithm
            .setIssuedAt()
            .setExpirationTime("10 secs") // token expiration time, e.g., "1 day"
            .sign(secretKey); // secretKey generated from previous step

        cookies().set("Authorization", `Bearer ${jwt}`)
        redirect(`/admin/`);
    }
}

async function autenticateUser(email: string, password: string) {
    const user = await db.query.users.findFirst({ where: eq(users.email, email) });
    if (!user) { return; }
    return await compare(password, user.password);
}