import axios from 'axios';
import Cookies from 'js-cookie';

// export function getUserData() {
//   return axios({
//     method: 'GET',
//     url: `${ROOT_URL}/posts`,
//   });
// }

export function setCsrfToken() {
  const token = Cookies.get('csrftoken');
  if (!token) {
    axios({
      method: 'GET',
      url: '/api/account/csrftoken/',
    })
      .then((res) => {
        Cookies.set('csrftoken', res.data.token);
        axios.defaults.headers.common['X-CSRFToken'] = res.data.token;
      })
      .catch((err) => {
        console.dir(err);
      });
  } else {
    axios.defaults.headers.common['X-CSRFToken'] = token;
  }
}

// eslint-disable-next-line import/prefer-default-export
export function getUserInfo() {
  return axios(
    {
      method: 'GET',
      url: '/api/account/me/',
    },
    {
      withCredentials: true,
    }
  );
}
export function Logout() {
  return axios(
    {
      method: 'POST',
      url: '/api/oauth/logout/',
    },
    {
      withCredentials: true,
    }
  );
}
export function putUserProfile(data, id) {
  return axios(
    {
      method: 'PATCH',
      url: `/api/account/profile/${id}/`,
      data,
    },
    {
      withCredentials: true,
    }
  );
}

export function postUserProfile(data) {
  return axios(
    {
      method: 'POST',
      url: `/api/account/profile/`,
      data,
    },
    {
      withCredentials: true,
    }
  );
}

export function putUserProfileImg(file) {
  const data = new FormData();
  data.append('profile_img', file);
  return axios(
    {
      method: 'POST',
      url: `/api/account/profile/`,
      data,
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    }
  );
}

export function fetchProfile(profile) {
  console.log(profile);
  if (!profile || !profile.id) {
    return postUserProfile(profile);
  }
  return putUserProfile(profile, profile.id);
}
