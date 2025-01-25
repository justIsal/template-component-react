import React, { useState } from "react"
import Input from "../atoms/Input"
import Button from "../atoms/Button"

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin(username, password)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <Button type="submit">Login</Button>
    </form>
  )
}

export default LoginForm

