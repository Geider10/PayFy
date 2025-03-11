import { configureStore } from "@reduxjs/toolkit";
import payFy from "./slice/payFySlice";
import { authSlice } from "./slice/authSlice";
import { serviceSlice} from './slice/serviceSlice';
export const store = configureStore({
  reducer: {
    payFy: payFy,
    authSlice: authSlice.reducer,
    serviceSlice: serviceSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;


// 1 Crear el Slice:Define el estado inicial y los reducers con las acciones dentro del slice .
// 2 Crear el Store:Configura la tienda de Redux combinando los slices y exporta el estado (RootState) y el dispatch (AppDispatch).
// 3 Crear el Hook:Define un hook (useStore) que encapsula la lógica de storage y proporciona métodos y propiedades para interactuar con el estado global.
// 4 Aplicar el Hook:Importa el hook en los componentes y utiliza las funcionalidades proporcionadas.
// 5 Layout:Importa el provider de Redux (Provider) y pasa la tienda (store) para que el estado global esté disponible en toda la aplicación.

