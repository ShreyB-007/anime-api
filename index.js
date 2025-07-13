import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import axios from "axios";
import xml2js from "xml2js"

// Setting up the express port
const app = express();
const port = 3000;

// Setting up the file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Setting up EJS as the view engine
app.set("view engine", "ejs");

// Setting up the parser to convert XML to JSON
const parser = new xml2js.Parser();

// Declaring the static files
app.use(express.static(__dirname + "/public"));

// Making a function to load random images, each time user reloads the page
function imageGen() {
    var num = Math.floor(Math.random()*7) + 1;
    return num;
}

// Making a function to parse the received XML data and convert it to JSON
async function parseXML(xml) {
    try {
        const result = await parser.parseStringPromise(xml);
        const data = result.rss.channel[0].item;
        return data;
    } catch (err) {
        console.error("XML Parsing", err);
    }
}

// Making a function to extract a single news from the data sent by API
async function randomNews(xml) {
    const data = await parseXML(xml);
    const oneNews = Math.floor(Math.random()*data.length);
    return data[oneNews];
}

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://api.animechan.io/v1/quotes/random");
        const result = response.data;
        res.render("index", {
            randomImage : "/images/img" + imageGen() + ".jpg",
            quote : result.data.content,
            character : result.data.character.name,
            anime : result.data.anime.name,
         });
    } catch (error) {
        console.log(error.response.data);
        res.render("index", {
            randomImage : "/images/img" + imageGen() + ".jpg",
            quote : error.response.data.message,
            character : null,
            anime : null,
        });
    }
})

app.get("/news", async (req, res) => {
    try {
        const response = await axios.get("https://www.animenewsnetwork.com/all/rss.xml");
        const result = await randomNews(response.data);
        res.render("news", {
            title : result.title,
            description : result.description,
            pubDate : result.pubDate,
            category : result.category,
            link : result.link,
        });
    } catch (err) {
        console.log(err.response.data);
    }
});

// Listening on the given port
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})