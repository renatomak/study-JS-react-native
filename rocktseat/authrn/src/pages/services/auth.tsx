export default function signIn() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'lajfaljfalkfjalkfjajdfajfaslkflaksfjajf',
        user: {
          name: 'Renato',
          email: 'renato@gmail.com',
        },
      });
    }, 2000);
  });
}
