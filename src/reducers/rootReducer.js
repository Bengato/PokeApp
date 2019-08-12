/*eslint-disable*/
const initState = {
  posts: [
    { id: "1", title: "Squirtle", body: "The starter Water type pokemon" },
    { id: "2", title: "Charmander", body: "The starter Fire type pokemon" },
    { id: "3", title: "Bulbasaur", body: "The starter Grass type pokemon" }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type == "DELETE_POST") {
    let newPosts = state.posts.filter(post => post.id != action.id);
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};
export default rootReducer;
