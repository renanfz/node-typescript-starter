const users = [
     {
          "id": 1,
          "nome": "Bosco",
          "curso": "tenente"
     },
     {
          "id": 3,
          "nome": "Handlass",
          "curso": "consultor"
     },
     {
          "id": 3,
          "nome": "usho",
          "curso": "tenente"
     }
]

const filtered = users.find(item => item.id == 3)
console.info(filtered)