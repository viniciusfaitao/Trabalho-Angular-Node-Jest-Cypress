const getAll = ((request, response) => {
  response.send(VETERINARY)
})

const post = ((request, response) => {
  const veterinary = request.body

  const firstId = VETERINARY
    ? Math.max.apply(
      null,
      VETERINARY.map(veterinaryIterator => veterinaryIterator.id)
    ) + 1
    : 1
  veterinary.id = firstId
  VETERINARY.push(veterinary)

  response.status(201).send(veterinary)
})

const putById = ((request, response) => {
  const veterinaryId = +request.params['id']
  const veterinary = request.body

  const index = VETERINARY.findIndex(veterinaryIterator => veterinaryIterator.id === veterinaryId)
  VETERINARY[index] = veterinary

  response.status(200).send(veterinary)
})

const getById = ((request, response) => {
  const veterinaryId = +request.params['id']

  response.status(200).send(VETERINARY.find(veterinaryIterator => veterinaryIterator.id === veterinaryId))
})

const deleteById = ((request, response) => {
  const veterinaryId = +request.params['id']
  VETERINARY = VETERINARY.filter(veterinaryIterator => veterinaryIterator.id !== veterinaryId)

  response.status(204).send({})
})

module.exports = { getAll, post, putById, getById, deleteById };

var VETERINARY = [
  {
    id: 1,
    name: 'Vinicius Faitão',
    email: 'vfaitaop@gmail.com',
    phone: '51992973143'
  },
  {
    id: 2,
    name: 'Nicolas Anacleto',
    email: 'nicolasAnacleto@gmail.com',
    phone: '51999955555'
  },
  {
    id: 3,
    name: 'Luan Martins',
    email: 'luanMartins@gmail.com',
    phone: '51988884444'
  }
]