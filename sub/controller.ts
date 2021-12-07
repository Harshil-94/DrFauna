import { Request, Response, Router } from "express";
import database from "./database";
import {
  addNgoToDatabase,
  addUserToDatabase,
  contactUsToDatabase,
  loginDatabase,
} from "./service";

const userAdd = async (req: Request, res: Response) => {
  try {
    await addUserToDatabase(req.body.name, req.body.email, req.body.password);
    res.json({ success: true, message: "data added" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "cannot add the user" });
  }
};
const ngoAdd = async (req: Request, res: Response) => {
  try {
    await addNgoToDatabase(
      req.body.name,
      req.body.email,
      req.body.phone,
      req.body.address,
      req.body.time
    );
    res.json({ success: true, message: "data added" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "cannot add the user" });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const checklogin = await loginDatabase(req.body.email, req.body.password);
    //res.send("login sucessful");
    if (checklogin != null) {
      res.json({ success: true, message: "login succesfully" });
    } else {
      res.json({ sucess: false, message: "login unsucessful" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "login unsuccesful" });
  }
};

const contactus = async (req: Request, res: Response) => {
  try {
    await contactUsToDatabase(
      req.body.name,
      req.body.email,
      req.body.number,
      req.body.message
    );
    res.json({
      success: true,
      message: "thank you for your support, your data has been added",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "cannot add the user" });
  }
};

export const userRoute = () => {
  const app = Router();
  app.post("/adduser", userAdd);
  app.post("/addngo", ngoAdd);
  app.post("/login", login);
  app.post("/contactus", contactus);
  return app;
};
