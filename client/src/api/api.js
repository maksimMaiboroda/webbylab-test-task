import * as axios from "axios";

const instanse = axios.create({
  baseURL: `/api/films`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const filmsAPI = {
  getFilms() {
    return instanse.get(`/`).then((response) => response.data);
  },
/* 
  saveFile(fileData) {
    
    let formData = new FormData();
    let imagefile = document.querySelector('#file');
    formData.append("file", imagefile.files[0]);

    let config = { header: { "content-type": "multypart/form-data" } };


    console.log(imagefile.files[0]);
    instanse.post("/upload", formData, config);
  },
 */
  addFilm(film) {
    return instanse.post(`/addFilm`, film);
  },

  filmDel(id) {
    return instanse.delete(`/delFilm/${id}`);
  },
};
