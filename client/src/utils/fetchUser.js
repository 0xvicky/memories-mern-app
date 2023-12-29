export const fetchUser = () => {
  const res = localStorage.getItem("user");
  return res;
};
