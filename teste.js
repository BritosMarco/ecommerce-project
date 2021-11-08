const user = new User();
user.name = 'Leo';
await connection.manager.save(user);

const photo1 = new Photo();
photo1.url = 'me.jpg';
photo1.user = user;
await connection.manager.save(photo1);

const photo2 = new Photo();
photo2.url = 'me-and-bears.jpg';
photo2.user = user;
await connection.manager.save(photo2);