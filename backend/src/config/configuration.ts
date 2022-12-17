import { Configuration } from "@/entities/shared/configuration.interface"
import { Builder } from "builder-pattern"

const MONGO_USERNAME = process.env.MONGO_USERNAME || ''
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || ''
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.us0aqfp.mongodb.net/shop?retryWrites=true&w=majority`

export default () =>
  Builder<Configuration.Configure>()
    .database({
      mongoUrl: MONGO_URL,
      mongoDbs: process.env.MONGO_DBS || "ant-man",
    })
    .security({
      authentication: {
        jwt: {
          secret: process.env.JWT_ACCESS_KEY || 'NDhjNjk1NTM3NWRlNjc1NDMwZjllNWFiMmVlYjQ4NzViYzY4MmY5ZWY2MzZhMzNiMTYxYmNlYjJkMWYwNDk0NDBlNDYwZThjMmFmNzAyNTQyOWYxMDhkM2QxYTQ3ZDFjM2I5YWU4YWVjOGRhNDc3MWE5OTExMzUyMjI3MDlmZWM='
        }
      }
    })
    .build()
