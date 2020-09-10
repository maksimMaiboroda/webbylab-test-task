const { Router } = require("express");
const Film = require("../models/Film");
const fs = require("fs");

const router = Router();

// /api/films/
router.get("/", async (req, res) => {
  try {
    const films = await Film.find();
    res.status(201).send(films);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong, try again!" });
  }
});

// /api/films/upload

router.post("/upload", async (req, res, next) => {
  let fileData = await req.file;
  console.log(fileData);
  console.log(fileData.originalname.slice(-4));
  if (fileData.originalname.slice(-4) !== ".txt") {
    res.send("Неверный формат файла");
  } else if (fileData.size == 0) {
    res.send("Ошибка при загрузке файла, файл пустой!");
  }

  fs.readFile(fileData.path, "utf8", function (error, data) {
    if (error) throw error;

    const text = data
      .replace(/Title:+/g, '"},{title:"')
      .replace(/Release Year:+/g, '",releaseYear:')
      .replace(/Format:+/g, ',format:"')
      .replace(/Stars:+/g, '",stars:"')
      .slice(3)
      .replace(/\s+/g, " ")
      .trim();

    const text2 = `${text}"}`;

    const text3 = JSON.parse(JSON.stringify(text2, null, 4));

    fs.writeFile("films.json", text3, function (error) {
      if (error) throw error;
      let data = fs.readFileSync("films.json", "utf8");

      String.prototype.replaceAll = function (search, replacement) {
        var target = this;
        return target.replace(new RegExp(search, "g"), replacement);
      };

      var str =
        "{lat:55.74755013048941, lng:37.63388156890869},{lat:55.746245766551574, lng:37.63336658477783},{lat:55.746789256825124, lng:37.63115644454956}";
      data = data.replaceAll("title", '"title"');
      data = data.replaceAll("releaseYear", '"releaseYear"');
      data = data.replaceAll("format", '"format"');
      data = data.replaceAll("stars", '"stars"');

      var a = JSON.parse('{"obj":[' + data + "]}");
      a.obj.map(async (el) => {
        const film = new Film({
          title: el.title,
          releaseYear: el.releaseYear,
          format: el.format,
          stars: el.stars,
        });
        console.log(film);
        await film.collection.insert(a.obj);
      });
    });
  });

  if (!fileData) res.send("Ошибка при загрузке файла");
  else res.send("Файл загружен");
});

// /api/films/addFilm
router.post("/addFilm", async (req, res) => {
  try {
    const { title, releaseYear, format, stars } = req.body;

    /*  const filmCheck = await Film.find({ title, releaseYear, format, stars });
    if (filmCheck) {
      return res.status(400).json({ message: "Такой фильм уже существует" });
    } */

    const film = new Film({ title, releaseYear, format, stars });

    await film.save();

    res.status(201).json({ message: "Фильм успешно добавлен" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong, try again!" });
  }
});

// /api/films/addFilm
router.delete("/delFilm/:id", async (req, res) => {
  try {
    const id = req.params.id;

    await Film.findById(id).remove();

    res.status(201).json({ message: "Фильм успешно удален" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong, try again!" });
  }
});

module.exports = router;
