const users = [
    {id:1, name: 'Thales', email: 'thales@carteiraglobal.com'},
    {id:2, name: 'Lucas', email: 'lucas@carteiraglobal.com'},
    {id:3, name: 'Gabriel', email: 'gabriel@carteiraglobal.com'},
    {id:4, name: 'Luan', email: 'luan@carteiraglobal.com'},
    {id:5, name: 'Helder', email: 'helder@carteiraglobal.com'},
    {id:6, name: 'Victor', email: 'victor@carteiraglobal.com'},
]

module.exports = {
    Query: {
        users: () => users,
        user: (id) => users[0]
    },
    Mutation: {
        createUser: () => users[0]
    }
}