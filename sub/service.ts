import database from "./database";
//import argon from "argon2";

export const addUserToDatabase = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    return await (await database())
      .collection("user")
      .insertOne({ name: name, email: email, password: password });
  } catch (Error) {
    console.log(Error);
    throw Error("failed to enter the data");
  }
};

export const addNgoToDatabase = async (
  name: string,
  email: string,
  phone: string,
  address: string,
  time: string
) => {
  try {
    return await (await database()).collection("user").insertOne({
      name: name,
      email: email,
      phone: phone,
      address: address,
      time: time,
    });
  } catch (Error) {
    console.log(Error);
    throw Error("failed to enter the data");
  }
};

export const loginDatabase = async (email: string, password: string) => {
  try {
    return await (await database()).collection("user").findOne({
      $and: [{ email: email, password: password }],
    });
  } catch (Error) {
    console.log(Error);
    throw Error("failed to find");
  }
};

export const contactUsToDatabase = async (
  name: string,
  email: string,
  number: string,
  message: string
) => {
  try {
    return await (await database()).collection("contactus").insertOne({
      name: name,
      email: email,
      number: number,
      message: message,
    });
  } catch (Error) {
    console.log(Error);
    throw Error("failed to enter the data");
  }
};
