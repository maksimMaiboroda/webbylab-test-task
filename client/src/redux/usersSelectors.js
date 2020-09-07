import { createSelector } from "reselect";

export const getUsers = (state) => {
  return state.usersPage.users;
};

export const isUsersLoaded = (state) => {
  return state.usersPage.usersLoaded;
};

export const gerUsersSelector = createSelector(getUsers, (users) => {
  return users;
});
