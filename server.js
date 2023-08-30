import dotenv from "dotenv";
import express from "express";
import postsRouter from "./routes/postsRouter.js";
import ecaRouter from "./routes/ecaRouter.js";
import jerryRouter from "./routes/jerryRouter.js";
import susannaRouter from "./routes/susannaRouter.js";
import oleksiyRouter from "./routes/oleksiyRouter.js";
import chrisRouter from "./routes/chrisRouter.js";
import vijayaRouter from "./routes/vijayaRouter.js";
import benRouter from "./routes/benRouter.js";
import estebanRouter from "./routes/estebanRouter.js";
import tamerRouter from "./routes/tamerRouter.js";
dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

// ROUTES
app.use("/posts", postsRouter)
// ECA ROUTES
app.use("/eca", ecaRouter)
// OLE ROUTES
app.use('/oleksiy', oleksiyRouter)
// CHRIS ROUTES
app.use('/chris', chrisRouter)
// TAMER ROUTES
app.use('/tamer', tamerRouter)
// JERRY ROUTES
app.use("/jerry", jerryRouter)
// BEN ROUTES
app.use('/ben', benRouter)
// SUS ROUTES
app.use('/susanna', susannaRouter)
// VIJ ROUTES
app.use("/vijaya", vijayaRouter)
// ESTEBAN ROUTES
app.use("/esteban", estebanRouter)



app.listen(port, () =>
  console.log(`http://localhost:${port}/`)
);