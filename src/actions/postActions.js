/*eslint-disable*/
const deletePost = id => {
  return {
    type: "DELETE_POST",
    id
  };
};
export default deletePost