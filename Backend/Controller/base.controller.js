const { compare } = require("bcryptjs");
const jwt = require("jsonwebtoken");
const httpStatusCode = require("http-status-codes");

class BaseController {
  constructor(RepoClass) {
    this.repo = new RepoClass();
  }

  // Common response Method
  ok(res, data) {
    if (!!data) {
      res.status(httpStatusCode.OK).send({ massage: "Ok", data: data });
    } else {
      res.status(httpStatusCode.OK).send({ massage: "Ok" });
    }
  }
  deleted(res, data) {
    return res.status(httpStatusCode.CREATED).send({ massage: "Deleted" });
  }
  created(res, data) {
    return res
      .status(httpStatusCode.CREATED)
      .send({ massage: "Created", data: data });
  }
  unauthorized(res, massage) {
    return res
      .status(httpStatusCode.UNAUTHORIZED)
      .send({ massage: "Unauthorized" });
  }
  forbidden(res, massage) {
    return res.status(httpStatusCode.FORBIDDEN).send({ massage: "Forbidden" });
  }
  notFound(res, massage) {
    return res.status(httpStatusCode.NOT_FOUND).send({ massage: "Not Found" });
  }
  conflict(res, massage) {
    return res.status(httpStatusCode.CONFLICT).send({ massage: "Conflict" });
  }
  internalServerError(res, error) {
    console.log(error);
    return res
      .status(httpStatusCode.INTERNAL_SERVER_ERROR)
      .send({ massage: "Internal Server Error" });
  }
  // Common db Operations
  getAll = (req, res) => {
    this.repo
      .findAll()
      .then((docs) => {
        return this.ok(res, docs);
      })
      .catch((err) => {
        return this.internalServerError(res, err);
      });
  };
  addUser = (req, res) => {
    const body = req.body;
    this.repo
      .createUser(body)
      .then((doc) => {
        return this.created(res, doc);
      })
      .catch((err) => {
        return this.internalServerError(res, err);
      });
  };
  addAppointment = (req,res) => {
    const body = req.body;
    this.repo
      .createAppointment(body)
      .then((doc) => {
        return this.created(res, doc);
      })
      .catch((err) => {
        return this.internalServerError(res, err);
      });
  } 
  update = (req, res) => {
    let id = req.params.id;
    const body = req.body;
    this.repo
      .update(id, body)
      .then((doc) => {
        return this.ok(res, doc);
      })
      .catch((error) => {
        return this.internalServerError(res, error);
      });
  };
  deleteById = (req, res) => {
    let id = req.params.id;
    this.repo
      .deleteById(id)
      .then((doc) => {
        return this.ok(res, doc);
      })
      .catch((err) => {
        return this.internalServerError(res, err);
      });
  };
  getById = (req, res) => {
    let id = req.params.id;
    this.repo
      .findById(id)
      .then((doc) => {
        return this.ok(res, doc);
      })
      .catch((err) => {
        return this.internalServerError(res, err);
      });
  };
  getByName = (req, res) => {
    let name = req.params.id;
    this.repo
      .findByName(name)
      .then((doc) => {
        return this.ok(res, doc);
      })
      .catch((err) => {
        return this.internalServerError(res, err);
      });
  };
  loginUser = async (req, res) => {
    try {
      const body = req.body;

      const user = await this.repo.findOne({_email:body._email});
      if (!user) {
        throw new Error("User Not Found");
      }
      const isMatch = await compare(body._password, user._password);
      if (!isMatch) {
        throw new Error("Password Dont Match");
      }
      const token = jwt.sign(
        {
          _id: user._id,
          _name: user._name,
          _email: user._email,
          _phone: user._phone,
          _birth: user._birth,
          _address: user._address,
        },
        process.env.JWT_SECRET,
        {expiresIn:"2d"}
      );
      return this.ok(res, { _id: user._id, token});
    } catch (error) {
      this.internalServerError(res, error);
    }
  };
}

module.exports = BaseController;
