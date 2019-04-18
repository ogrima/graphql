 const db = require('../config/database')

 module.exports = {
     Query: {
         //destruction retirar de dentro do parametro o atributo id
         async getUser(_, { id }) {
            return await db('users').where({ id: id }).first()
         },
         async getUsers() {
             return await db('users')
         }
     },

     Mutation: {
         async createUser(_,{ input }) {
             const result = await db('users').insert({
                 name: input.name,
                 email: input.email,
                 password: input.password
             })

             const id = result[0]
             return await db('users').where({ id }).first()
         }
     } 
 }