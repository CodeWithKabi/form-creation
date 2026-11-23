// let username: string = "kabilan";
// let age: number = 22;
// let isStudent: boolean = true;

// function greet(): void {
//   console.log(`Hi ${username}`);
// }

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   phone?: string;
// }

// const users: User[] = [
//   {
//     id: 1,
//     name: "kabsan",
//     email: "kabsan@gmail.com"
//   },
//   {
//     id: 2,
//     name: "Teddy",
//     email: "teddy@gmail.com",
//     phone: "12345678090"
//   }
// ];

// function displayAllUser(user: User): void {
//   console.log(`User Name: ${user.name}`);
//   console.log(`User Email: ${user.email}`);
//   console.log(`User Phone: ${user.phone ?? "Not provided"}`);
// }

// function getUserCount(users: User[]): number {
//   return users.length;
// }

// greet();

// for (const user of users) {
//   displayAllUser(user);
// }

// console.log("Total Users:", getUserCount(users));

// let role: "admin" | "manager" | "user";
// role = "admin";

// console.log("Role:", role);

interface User {
  id:number;
  name:string;
  password: string;
  email:string;
  phone_no ?:number;
}

let user1:User={
	id:1,
	name:"kabilan",
        password:"kabilan@123",
	email:"kabilan123@gmail.com",
   phone_no:123 ,
};

let user2:User={
id:2,
name:"sunuraj",
password:"123",
email:"sunu@gmail.com",
//  phone_no:123 
};

let user3:User={
id:3,
name:"Dinesh",
password:"123456",
email:"dinesh@gmail.com",
 phone_no:123 
};
let user4:User={
id:4,
name:"gopika",
password:"123",
email:"gopika@gmail.com",
//  phone_no:123 
};


// console.log("user1 ",user1.phone_no);
// console.log("user2 ",user2.phone_no);
// console.log("user3 ",user3.phone_no);
// console.log("user4 ",user4.phone_no);

class student{
 id:number;
 name:string;
 age:number;

 constructor(id:number,name:string,age:number){
  this.id=id;
  this.name=name;
  this.age=age

 }

}
const s1=new student(1,"kabl",22);
const s2=new student(2,"san",23);


console.log(s1);
console.log(s2);