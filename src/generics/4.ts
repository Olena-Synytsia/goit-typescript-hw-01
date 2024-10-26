type UserProfile = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<UserProfile>) {
  return { ...initialValues };
  // Оновлення користувача
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
