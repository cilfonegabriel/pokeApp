import request from 'supertest';
import app from '../server';

const server = app.listen();

afterAll(done => {
  server.close(done);
});

describe('GET /pokemon/:id', () => {
  it('responds with JSON containing the requested Pokemon', async () => {
    const id = 20;
    const res = await request(app).get(`/api/pokemon/${id}`);
    
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data).toHaveProperty('id');
    expect(res.body.data).toHaveProperty('name');
    expect(res.body.data).toHaveProperty('height');
    expect(res.body.data).toHaveProperty('weight');
    expect(res.body.data).toHaveProperty('stats');

    expect(res.status).not.toBe(404)
    expect(res.body.msg).not.toBe("Computadora")
  });
});

describe('GET /api/pokemon/:id', () => {
    it('should return a 404 response for a non-existent Pokemon', async () => {
      const pokemonId = 20000; 
      const res = await request(server).get(`/api/pokemon/${pokemonId}`);
      
      expect(res.status).toBe(404);
      expect(res.body.message).toBe('Pokémon not found' );
    });
  });
