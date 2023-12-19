import * as z from 'zod'

export const SignupValidation = z.object({
    name: z.string().min(2, { message: "To short" }).max(30),
    username: z.string().min(3).max(30),
    email: z.string().email(),
    password: z.string().min(6, { message: "To short" }).max(30),
})
export const SigninValidation = z.object({

    email: z.string().email(),
    password: z.string().min(6, { message: "To short" }).max(30),
})


export const PostValidation = z.object({

    caption: z.string().min(2).max(2200),
    file: z.custom<File[]>(),
    location: z.string().min(2).max(200),
    tags: z.string(),
})

