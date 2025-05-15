import express from "express"
import cors from "cors"

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    // credentials:true
}))
app.use(express.json({limit:"16kb"}))

//Express.js to use middleware for parsing URL-encoded bodies that is data sent from forms of incoming requests.
app.use(express.urlencoded({extended:true,limit:"16kb"}))







// import enquiryRouter from "./routes/enquiry.routes.js"

// app.use("/enquiries", enquiryRouter)

export default app