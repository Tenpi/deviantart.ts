import {assert} from "chai"
import "mocha"
import DeviantArt from "../DeviantArt"

require("dotenv").config()
let deviantArt: DeviantArt

describe("RSS", async function() {
    this.beforeAll(async function() {
        deviantArt = await DeviantArt.login(process.env.DEVIANTART_CLIENT_ID, process.env.DEVIANTART_CLIENT_SECRET)
    })

    it("should get from a URL", async function() {
        const result = await deviantArt.rss.get("https://www.deviantart.com/fhilippe124/art/Sagiri-Izumi-Eromanga-sensei-fanart-678288299")
        assert(result.hasOwnProperty("thumbnails"))
    })

    it("should get from a search query", async function() {
        const result = await deviantArt.rss.get("Eromanga Sensei")
        assert(result.hasOwnProperty("thumbails"))
    })

    it("should work with a search", async function() {
        const result = await deviantArt.rss.search("anime", 10, "deviation")
        assert(result[0].hasOwnProperty("thumbnails"))
    })
})
