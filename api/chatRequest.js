import axios from 'axios'

const req = axios.create({
    baseURL: 'https://groq-api.radya.fun',
    headers: 'application/json'
})

async function request(body) {
    const result = await req.post('/chat', {
        msg: body,
        password: process.env.PASSWORD
    })

    return result
}

export { request }