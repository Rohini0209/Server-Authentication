<h1>Register</h1>

<form action="/register" method="post">
  <div>
    <label for="name">Name</label>
    <input type="text" name="name" id="name" required>
  </div>
  <div>
    <label for="email">Email</label>
    <input type="email" name="email" id="email" required>
  </div>
  <div>
    <label for="password">Password</label>
    <input type="password" name="password" id="password" required>
  </div>
  <button type="submit">Register</button>
</form>

<a href="/login">login</a>
