import React, { useState, useEffect } from "react"
import Editor from "./Editor"
import Quiz from "./Quiz"

function App() {
  const [today, setToday] = useState<string>("")

  const [inExam, setInExam] = useState<boolean>(false)

  useEffect(() => {
    const now = new Date()
    setToday(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`)
  }, [])

  const toggleExam = () => {
    setInExam(prev => !prev)
  }

  return (
    <section>
      {inExam ? <Quiz target={today} /> : <Editor today={today} />}
      <button onClick={toggleExam}>{inExam ? "End Exam" : "Start Exam"}</button>
    </section>
  )
}

export default App
