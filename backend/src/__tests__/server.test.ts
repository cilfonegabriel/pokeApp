import request from 'supertest'
import app from '../server'

const server = app.listen();

afterAll(done => {
  server.close(done);
});

describe('Get /api', () => {
    it('should send back a json response', async () =>{
        const res = await request(app).get('/api')

        expect(res.status).toBe(200)
        expect(res.headers['content-type']).toMatch(/json/)
        expect(res.body.msg).toBe('Desde Api')

        expect(res.status).not.toBe(404)
        expect(res.body.msg).not.toBe("desde api")
    })
})


