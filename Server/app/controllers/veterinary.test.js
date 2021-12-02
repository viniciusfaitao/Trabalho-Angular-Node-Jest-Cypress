const request = require("supertest")
const app = require('../app')

describe('Controllers: Veterinary', () => {
  describe('Get All Veterinaries: getAll()', () => {
    it('should return a list of veterinaries', async () => {
      const result = await request(app).get('/api/veterinary')

      expect(result.body.length).toBe(3);
    })
  })

  describe('Get Veterinary by ID: get()', () => {
    it('should return veterinary at id 1', async () => {
      const result = await request(app).get('/api/veterinary/1')
      const expectedResult = {
        id: 1,
        name: 'Vinicius Faitão',
        email: 'vfaitaop@gmail.com',
        phone: '51992973143'
      }

      expect(JSON.stringify(result.body)).toBe(JSON.stringify(expectedResult));
    })
  })

  describe('Put Veterinary by ID: put()', () => {
    it('should get veterinary with id 2, change the name and put veterinary with id 2', async () => {
      const resultBefore = await request(app).get('/api/veterinary/2')

      const expectedResultBefore = {
        id: 2,
        name: 'Nicolas Anacleto',
        email: 'nicolasAnacleto@gmail.com',
        phone: '51999955555'
      }

      expect(JSON.stringify(resultBefore.body)).toBe(JSON.stringify(expectedResultBefore));

      await request(app).put('/api/veterinary/2').send({
        id: 2,
        name: 'Nicolas Anacleto After',
        email: 'nicolasAnacleto@gmail.com',
        phone: '51999955555'
      })

      const resultAfter = await request(app).get('/api/veterinary/2')

      const expectedResultAfter = {
        id: 2,
        name: 'Nicolas Anacleto After',
        email: 'nicolasAnacleto@gmail.com',
        phone: '51999955555'
      }

      expect(JSON.stringify(resultAfter.body)).toBe(JSON.stringify(expectedResultAfter));
    })
  })

  describe('Post new Veterinary: post()', () => {
    it('should get all veterinarians and post new veterinary', async () => {
      const resultBefore = await request(app).get('/api/veterinary')

      expect(resultBefore.body.length).toBe(3);

      await request(app).post('/api/veterinary').send({
        name: 'New Veterinary',
        email: 'newveterinary@gmail.com',
        phone: '5154564865456'
      })

      const resultAfter = await request(app).get('/api/veterinary')

      expect(resultAfter.body.length).toBe(4);
    })
  })

  describe('Delete Veterinary by ID: delete()', () => {
    it('should delete veterinary with id 1 and when get all veterinarians will return three', async () => {
      await request(app).delete('/api/veterinary/1')
      const result = await request(app).get('/api/veterinary')

      expect(result.body.length).toBe(3);
    })
  })
})
