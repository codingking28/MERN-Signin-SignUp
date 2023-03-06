import API from "../assets/AJAXConfig";

export const SigninUser = async (user) => {
  let response = await API.post("/info/signin/", user).then((res) => {
    return res.data;
  });
  return response;
};
export const FetchAllUser = async () => {
  let response = await API.get("/info").then((res) => {
    return res.data;
  });
  return response;
};
export const DeleteUser = async (id) => {
  let response = await API.delete(`/info/del/${id}`).then((res) => {
    return res.data;
  });
  return response;
};
export const EditUser = async (data) => {
  let response = await API.put("/info/update", data).then((res) => {
    return res.data;
  });
  return response;
};
export const CreateUser = async (data) => {
  let response = await API.post("/info", data).then((res) => {
    return res.data;
  });
  return response;
};
