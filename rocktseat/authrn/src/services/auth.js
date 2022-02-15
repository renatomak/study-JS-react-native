export function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "lahjfoquerdlfjfjhoquroeurlasjlfjalfhqoueoquhnfljh",
        user: {
          name: "Renato",
          email: "renato@gmail.com",
        },
      });
    }, 500);
  });
}
