import { Router } from "express";

const router = Router()

router.post('/turmas', (request, response) => {
    return response.status(201).send
})

export { router }