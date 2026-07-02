import { Client } from "@paragraphcms/client"

const apiKey = import.meta.env.PARAGRAPH_API_KEY

if (!apiKey) {
  throw new Error("PARAGRAPH_API_KEY environment variable is not set")
}

export const client = new Client({ apiKey })
