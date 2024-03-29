const { hash } = require("bcryptjs");

class BaseRepository {
  constructor(_collection) {
    this._collection = _collection;
  }
  findAll() {
    return this._collection.find().lean().exec();
  }
  findByName(name){
    return this._collection.find({_name:name})
  }
  findById(id) {
    return this._collection.findById(id);
  }
  findOne(object){
    return this._collection.findOne(object);
  }
  async createUser(model) {
    const hashedPassword = await hash(model._password, 10);

    const userModel = {
      ...model,
      _password: hashedPassword,
    };
    // Create the user in the database
    return this._collection.create(userModel);
  }

  async createAppointment(model){
      return this._collection.create(model)
  }
  update =async (body)=> {
    return await this._collection.findByIdAndUpdate(id, body, {
      new: true,
    });
  }
  deleteById(id) {
    console.log(id)
    return this._collection.findByIdAndDelete(id);
  }
}

module.exports = BaseRepository;
