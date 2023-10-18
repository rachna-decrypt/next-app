import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.DATABASE_URL!);
    const connection = mongoose.connection;
    connection.once("connected", () => {
      console.log("Mongodb connected ssucessfully");
    });

    connection.on("error", (err) => {
      console.log("DB connection error", +err);
      process.exit();
    });
  } catch (error) {
    console.error(error);
  }
}
