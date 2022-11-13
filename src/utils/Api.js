class Api {

  #url;
  #configApi;

  constructor({ url, ...configApi }) {

    this.#url = url;
    this.#configApi = configApi;
  }

  async #renderRequest(path, method = "GET", body) {

    const options = { ...this.#configApi, method };

    if (body) {

      (typeof body === "string") ? options.body = body
        : options.body = JSON.stringify(body);
    }
    const response = await fetch(this.#url + path, options);
    const json = await response.json();

    if (response.ok) {
      return json;
    }

    throw new Error(json.message);
  }

  getUser() {
    return this.#renderRequest("users/me");
  }

  getCards() {
    return this.#renderRequest("cards");
  }

  updateUser(inputValues) {

    return this.#renderRequest('users/me', 'PATCH', inputValues);
  }

  addCard(inputValues) {
    return this.#renderRequest("cards", 'POST', inputValues);
  }

  setLike(id) {
    return this.#renderRequest(`cards/${id}/likes`, 'PUT');
  }

  removeLike(id) {
    return this.#renderRequest(`cards/${id}/likes`, 'DELETE');
  }

  deleteCard(id) {
    return this.#renderRequest(`cards/${id}`, "DELETE");
  }

  setAvatar(data) {
    return this.#renderRequest('users/me/avatar', 'PATCH', data);
  }
}

const api = new Api({
  url: 'https://nomoreparties.co/v1/cohort-52/',
  headers: {
    authorization: '79dfd97e-4c73-4c37-a7d5-b5e09710f5c9',
    'Content-Type': 'application/json'
  },
})

export { api }
