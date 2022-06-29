import React from "react"

import Layout from "./components/layout"
import Profile from "./components/profile/Profile"
import { GithubProvider } from "./providers/GithubProvider"
import { Repositories } from "./components/repositories/Repositories"

function App() {
  return (
    <main>
      <GithubProvider>
        <Layout>
          <Profile/>
          <Repositories/>
        </Layout>
      </GithubProvider>
    </main>
  )
  
}
export default App
