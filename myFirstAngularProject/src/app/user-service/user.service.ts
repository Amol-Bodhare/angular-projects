import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
    const user = [
        {
          "id": "4e1880dd-e010-4595-9c24-50c7a9572283",
          "firstName": "Clotilde",
          "lastName": "Hartmann",
          "email": "Imogene.Parisian96@gmail.com",
          "address": {
            "street": "405 Ibrahim Run",
            "city": "Jeanland",
            "zip": "80768",
            "state": "WY",
            "country": "USA"
          },
          "dateCreated": "2018-05-06T16:39:40.131Z",
          "company": {
            "name": "Kub Inc",
            "website": "http://zelda.com"
          },
          "profilePic": "http://lorempixel.com/640/480/people"
        },
        {
          "id": "46028fad-0ce0-49f5-ab0c-51b70be7e86f",
          "firstName": "Alysson",
          "lastName": "Spencer",
          "email": "Anissa.Cummerata@hotmail.com",
          "address": {
            "street": "54011 Tanner Mountain",
            "city": "West Macyside",
            "zip": "60187-8782",
            "state": "OR",
            "country": "USA"
          },
          "dateCreated": "2018-05-06T10:26:24.891Z",
          "company": {
            "name": "Frami, Wilkinson and Barton",
            "website": "http://zetta.info"
          },
          "profilePic": "http://lorempixel.com/640/480/technics"
        },
        {
          "id": "021e3953-c9de-4ce3-a4f9-e82ec6928517",
          "firstName": "Marion",
          "lastName": "Schmitt",
          "email": "Joanie46@gmail.com",
          "address": {
            "street": "754 Dalton Terrace",
            "city": "Bergetown",
            "zip": "06398-0212",
            "state": "CA",
            "country": "USA"
          },
          "dateCreated": "2018-05-06T16:23:49.938Z",
          "company": {
            "name": "Waters - Torphy",
            "website": "https://urban.com"
          },
          "profilePic": "http://lorempixel.com/640/480/business"
        },
        {
          "id": "dd432d13-b794-4407-a937-c228e62f308f",
          "firstName": "Damien",
          "lastName": "Orn",
          "email": "Christelle.Rohan98@hotmail.com",
          "address": {
            "street": "0476 Ledner Via",
            "city": "New Clairechester",
            "zip": "80449",
            "state": "OR",
            "country": "USA"
          },
          "dateCreated": "2018-05-05T19:21:27.308Z",
          "company": {
            "name": "Barrows - Turner",
            "website": "http://layne.net"
          },
          "profilePic": "http://lorempixel.com/640/480/people"
        },
        {
          "id": "0de1cd4c-99a0-4b6e-9a7b-d614e780b31c",
          "firstName": "Marcelino",
          "lastName": "O'Reilly",
          "email": "Johann.Dietrich48@yahoo.com",
          "address": {
            "street": "366 Cronin Trace",
            "city": "New Christellefurt",
            "zip": "17184-7592",
            "state": "KY",
            "country": "USA"
          },
          "dateCreated": "2018-05-05T20:28:50.018Z",
          "company": {
            "name": "Rowe LLC",
            "website": "https://maudie.com"
          },
          "profilePic": "http://lorempixel.com/640/480/transport"
        },
        {
          "id": "9b62d0c4-8682-41f1-897c-8be6fb8b87e7",
          "firstName": "Cordell",
          "lastName": "Schmeler",
          "email": "Kylie_Schowalter49@yahoo.com",
          "address": {
            "street": "331 Zieme Canyon",
            "city": "Port Danielashire",
            "zip": "79897-6915",
            "state": "NE",
            "country": "USA"
          },
          "dateCreated": "2018-05-06T17:31:50.994Z",
          "company": {
            "name": "Collier, Friesen and Moore",
            "website": "http://lempi.name"
          },
          "profilePic": "http://lorempixel.com/640/480/food"
        },
        {
          "id": "da657942-559c-4d90-b1c6-fd68e18950b3",
          "firstName": "Mervin",
          "lastName": "Powlowski",
          "email": "Javon_Schamberger12@hotmail.com",
          "address": {
            "street": "2410 Effertz Ways",
            "city": "Anabury",
            "zip": "80442",
            "state": "NE",
            "country": "USA"
          },
          "dateCreated": "2018-05-06T04:57:11.390Z",
          "company": {
            "name": "Pagac LLC",
            "website": "https://florine.info"
          },
          "profilePic": "http://lorempixel.com/640/480/nightlife"
        },
        {
          "id": "5c7f60bb-8ca3-4718-b748-bebe619e25e8",
          "firstName": "Lester",
          "lastName": "Tromp",
          "email": "Alexys.Kunze@yahoo.com",
          "address": {
            "street": "9045 Vandervort Estates",
            "city": "Greenholtborough",
            "zip": "48951-2750",
            "state": "AR",
            "country": "USA"
          },
          "dateCreated": "2018-05-06T03:55:30.564Z",
          "company": {
            "name": "Stamm - Pagac",
            "website": "https://aracely.net"
          },
          "profilePic": "http://lorempixel.com/640/480/food"
        },
        {
          "id": "77fe76eb-f182-49a4-bb2f-963be5d109a1",
          "firstName": "Kyra",
          "lastName": "Gottlieb",
          "email": "Kay.Stamm@gmail.com",
          "address": {
            "street": "01124 Rickey Springs",
            "city": "Olgaburgh",
            "zip": "08241-2381",
            "state": "MD",
            "country": "USA"
          },
          "dateCreated": "2018-05-06T01:33:29.141Z",
          "company": {
            "name": "MacGyver - West",
            "website": "http://hollie.net"
          },
          "profilePic": "http://lorempixel.com/640/480/people"
        },
        {
          "id": "c8182c2d-f4db-4435-8d26-13c85cc0a030",
          "firstName": "Daisha",
          "lastName": "Kub",
          "email": "Mona_Hegmann@gmail.com",
          "address": {
            "street": "932 Metz Gardens",
            "city": "Casimerchester",
            "zip": "14334",
            "state": "AL",
            "country": "USA"
          },
          "dateCreated": "2018-05-06T05:17:36.898Z",
          "company": {
            "name": "Wolff Group",
            "website": "https://laila.name"
          },
          "profilePic": "http://lorempixel.com/640/480/technics"
        }
    ];

    getUsers() {
        return this.user;
    }
}