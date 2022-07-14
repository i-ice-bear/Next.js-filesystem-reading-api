//* this js file refers to the endpoint of the server and content fetching ethics {work in progress for production}

import * as fs from "fs";

export default function getBlog(req, res) {
  fs.readFile(`json/${req.query.slug}.json`, "utf-8", (err, data) => {
    if (err) {
      res
        .status(500)
        .json({
          error: "501",
          description: "Internal server error",
          exceptions: "No such file and directory",
        });
    }
    console.log(req.query.slug)
    res.status(200).json(JSON.parse(data));
  });
}
