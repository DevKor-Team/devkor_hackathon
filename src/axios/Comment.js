import axios from 'axios';

export const createComment = (req) => {
  return axios(
    {
      method: 'POST',
      url: `/api/demo/comments/`,
      data: req.data,
    },
    {
      withCredentials: true,
    }
  );
};

export const patchComment = (req, id) => {
  return axios({
    method: 'PATCH',
    url: `/api/demo/comments/${id}/`,
    data: req.data,
  });
};

export const deleteComment = (id) => {
  return axios(
    {
      method: 'DELETE',
      url: `/api/demo/comments/${id}/`,
    },
    {
      withCredentials: true,
    }
  );
};
