const user = {
  _id: "1",
  name: "Reed",
  email: "reedbarger@yahoo.com",
  picture: "https://cloudinary.com"
};

module.exports = {
  Query: {
    me: () => user
  }
};
