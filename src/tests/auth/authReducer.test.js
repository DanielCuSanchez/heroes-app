const { authReducer } = require("../../auth/authReducer");
const { types } = require("../../types/types");

describe("Pruebas en authreducer", () => {
  test("debe de retonar el estado por defecto", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });
  test("debe de autenticar y colocar el name del usuario", () => {
    const action = {
      type: types.login,
      payload: {
        name: "Andres",
      },
    };
    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({ logged: true, name: "Andres" });
  });
  test("debe de borrar el name del estado y logged en false", () => {
    const action = {
      type: types.logout,
    };
    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({ logged: false });
  });
});
