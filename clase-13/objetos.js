// let producto = {
//    "Precio" : "$3.99",
 //   "Nombre" : "BANANA NEW YORK",
 //   "Marca" : "ALFAFA",
  //  "ID" : "9878678465",
  //  "Descripcion" : "UNA BANANA IMPORTADA DE NEWYORK",

// }


const user = {
    name: 'pepe',
    lastname: 'suarez',
    'user preferences': {
        theme: 'dark-mode',
        lang: 'spanish'
    },
    'user info': {
        'created_at': '18/9/2005',
        'adress': 'av siempre viva 742',
        tel: '+22 1323-2122'
    }
}



"console.log('El usuario ' + user['name'] +' '+ user['lastname'] + ' creo su cuenta en fecha ' + user['user info']['created_at'] + ' vive en ' + user['user info']['adress'] + ' y su telefono es ' + user['user info']['tel'])"
//  console.log(`El usuario creo su cuenta en fecha  vive en  y su telefono es`)



console.log(`El usuario  ${user["name"]}  ${user["lastname"]}  creo su cuenta en  ${user["user info"].created_at}  vive en ${user["user info"].adress}  y su telefono es ${user["user info"].tel}`)
