const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// ''''''''''''''''''''''''''''''''''''''''
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@clusterdev.vuqw7lb.mongodb.net/?retryWrites=true&w=majority&appName=ClusterDev`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        await client.connect();

        const userCollection = client.db("bistroDb").collection("users");
        const menuCollection = client.db("bistroDb").collection("menu");
        const reviewCollection = client.db("bistroDb").collection("reviews");
        const cartCollection = client.db("bistroDb").collection("carts");

        // jwt related api
        app.post("/jwt", async (req, res) => {
            const user = req.body;
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: "1h",
            });
            res.send({ token });
        });

        // meddilewares jwt
        const verifyToken = (req, res, next) => {
            console.log("inside verify token", req.headers.authorization);
            if (!req.headers.authorization) {
                return res.status(401).send({ message: "unauthorized access" });
            }
            const token = req.headers.authorization.split(" ")[1];
            jwt.verify(
                token,
                process.env.ACCESS_TOKEN_SECRET,
                (err, decoded) => {
                    if (err) {
                        return res
                            .status(401)
                            .send({ message: "unauthorized access" });
                    }
                    req.decoded = decoded;
                    next();
                }
            );
        };

        // use verify admin after verifyToken
        const verifyAdmin = async (req, res, next) => {
            const email = req.decoded.email;
            const query = { email: email };
            const user = await userCollection.findOne(query);
            const isAdmin = user?.role === "admin";
            if (!isAdmin) {
                return res.status(403).send({ message: "forbidden access" });
            }
            next();
        };

        // create user related api
        app.get("/users", verifyToken, verifyAdmin, async (req, res) => {
            const result = await userCollection.find().toArray();
            res.send(result);
        });

        // chack user

        app.get("/users/admin/:email", verifyToken, async (req, res) => {
            const email = req.params.email;
            if (email !== req.decoded.email) {
                return res.status(403).send({ message: "forbidden access" });
            }

            const query = { email: email };
            const user = await userCollection.findOne(query);
            let admin = false;
            if (user) {
                admin = user?.role === "admin";
            }
            res.send({ admin });
        });

        app.post("/users", async (req, res) => {
            const userItem = req.body;
            console.log(userItem);

            const query = { email: userItem.email };
            const existingUser = await userCollection.findOne(query);
            if (existingUser) {
                return res.send({
                    message: "User already exists",
                    insertedId: null,
                });
            }
            const result = await userCollection.insertOne(userItem);
            res.send(result);
        });

        app.patch(
            "/users/admin/:id",
            verifyToken,
            verifyAdmin,
            async (req, res) => {
                const id = req.params.id;
                const filter = { _id: new ObjectId(id) };
                const updatedDoc = {
                    $set: {
                        role: "admin",
                    },
                };
                const result = await userCollection.updateOne(
                    filter,
                    updatedDoc
                );
                res.send(result);
            }
        );

        // user delete
        app.delete("/users/:id", verifyToken, verifyAdmin, async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await userCollection.deleteOne(query);
            res.send(result);
        });

        // menu related api
        app.get("/menu", async (req, res) => {
            const result = await menuCollection.find().toArray();
            res.send(result);
        });

        // menu for updata
        app.get('/menu/:id', async (req, res) =>{
            const id = req.params.id;
            const query = { _id: id };
            // const query = { _id: new ObjectId(id) };
            const result = await menuCollection.findOne(query);
            res.send(result);
        })

        // menu edit update for patch
        app.patch('/menu/:id' , async (req, res) =>{
            const item = req.body;
            const id = req.params.id;
            // const filter = {_id: new ObjectId(id)}
            const filter = {_id: id}
            const updateDoc = {
                $set: {
                    name: item.name,
                    category: item.category,
                    price: item.price,
                    recipe: item.recipe,
                    image: item.image
                }
            }
            const result = await menuCollection.updateOne(filter, updateDoc);
            res.send(result);
        });

        // menu post
        app.post("/menu", verifyToken, verifyAdmin, async (req, res) => {
            const item = req.body;
            const result = await menuCollection.insertOne(item);
            res.send(result);
        });

        // menu delete
        app.delete('/menu/:id', verifyToken, verifyAdmin, async (req, res) => {
            const id = req.params.id;
            console.log('id', id)
            const query = { _id: id };
            // const query = { _id: new ObjectId(id) };
            const result = await menuCollection.deleteOne(query);
            res.send(result);
        });

        // reviews
        app.get("/reviews", async (req, res) => {
            const result = await reviewCollection.find().toArray();
            res.send(result);
        });

        //cart collection

        app.get("/carts", async (req, res) => {
            const email = req.query.email;
            const query = { email: email };
            const result = await cartCollection.find(query).toArray();
            res.send(result);
        });

        app.post("/carts", async (req, res) => {
            const cartItme = req.body;
            const result = await cartCollection.insertOne(cartItme);
            res.send(result);
        });

        app.delete("/carts/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await cartCollection.deleteOne(query);
            res.send(result);
        });

        // // database and collections
        // const database = client.db("TravelDB");
        // const userCollection = database.collection("Users");
        // const touristsCollection = database.collection("Tourists");
        // const countriesCollection = database.collection("Countries");

        // // create single user
        // app.post("/users", async (req, res) => {
        //     console.log("user req", req.body);
        //     const user = await userCollection.insertOne(req.body);
        //     res.send(user);
        // });

        // // add torist sport
        // app.post("/tourists", async (req, res) => {
        //     console.log("data",req.body);
        //     const tourist = await touristsCollection.insertOne(req.body);
        //     res.send(tourist);
        // });

        // // show ul add torist sport
        // app.get("/tourists", async (req, res) =>{
        //     const tourist = await touristsCollection.find().toArray();
        //     res.send(tourist);
        // })

        // // show ul single data torist sport
        // app.get("/tourists/:id", async (req, res) =>{
        //     const id = req.params.id;
        //     const tourist = await touristsCollection.findOne({
        //         _id: new ObjectId(id),
        //     });
        //     res.send(tourist);
        // })

        // // torist for delate
        // app.delete("/mylist/:id", async (req, res) =>{
        //     const tourist = await touristsCollection.deleteOne({
        //         _id: new ObjectId(req.params.id),
        //     });
        //     res.send(tourist);
        // });

        // // get mylist specific item
        // app.get("/update-mylist/:id", async (req, res) => {
        //     const data = await touristsCollection.findOne({
        //         _id: new ObjectId(req.params.id),
        //     });
        //     res.send(data);
        // });

        // // mylist update & edit
        // app.put("/update-mylist/:id", async(req, res) =>{
        //     const {
        //         areaImage,
        //         area,
        //         country,
        //         location,
        //         description,
        //         avg_cost,
        //         seasonality,
        //         duration,
        //         total_visitors,
        //     } = req.body;

        //     const mylist = await touristsCollection.updateOne(
        //         {
        //             _id: new ObjectId(req.params.id),
        //         },
        //         {
        //             $set: {
        //                 areaImage,
        //                 area,
        //                 country,
        //                 location,
        //                 description,
        //                 avg_cost,
        //                 seasonality,
        //                 duration,
        //                 total_visitors,
        //             },
        //         },
        //         { upsert: true }
        //     );
        //     res.send(mylist);
        // })

        // // match email then show ul
        // app.get("/mylist/:email", async (req, res) =>{
        //     const tourist = await touristsCollection.find({
        //         email: req.params.email,
        //     }).toArray();
        //     res.send(tourist);
        // });

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Your successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);
// '''''''''''''''''''''''''''''''''''''''''''''''

app.get("/", (req, res) => {
    res.send("Boss is sitting");
});

app.listen(port, () => {
    console.log(`Bistro boss is sitting on port ${port}`);
});
