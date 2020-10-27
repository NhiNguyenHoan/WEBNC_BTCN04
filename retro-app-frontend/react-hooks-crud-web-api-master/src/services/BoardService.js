import http from "../http-common";

const getAll = () => {
  return http.get("/boards");
};

const get = id => {
  return http.get(`/boards/${id}`);
};

const create = data => {
  return http.post("/boards", data);
};

const update = (id, data) => {
  return http.put(`/boards/${id}`, data);
};

const remove = id => {
  return http.delete(`/boards/${id}`);
};

const removeAll = () => {
  return http.delete(`/boards`);
};

const findByTitle = title => {
  return http.get(`/boards?title=${title}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};
