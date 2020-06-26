import React, { FC, useEffect, useState } from "react"

type Props = {
  target: string
}

const Exam: FC<Props> = ({ target }) => {
  const [questions, setQuestions] = useState<string[]>([])
  const [answers, setAnswers] = useState<string[]>([])
  const [userInputs, setUserInputs] = useState<string[]>([])
  const [showAnswers, setShowAnswers] = useState(false)

  useEffect(() => {
    const list: Array<string[]> = JSON.parse(
      localStorage.getItem(target) || "[]"
    )
    list.sort(() => 0.5 - Math.random())

    list.forEach(item => {
      const pickIndex = 0.5 - Math.random() > 0 ? 0 : 1
      setQuestions(prev => [...prev, item[pickIndex].toLowerCase()])
      setAnswers(prev => [...prev, item[pickIndex === 0 ? 1 : 0].toLowerCase()])
    })
  }, [target])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setUserInputs(prev => {
      const items = [...prev]
      items[+name] = value
      return items
    })
  }

  const toggleShowAnswers = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setShowAnswers(prev => !prev)
  }

  return (
    <section>
      {questions.map((item, index) => {
        return (
          <p key={index}>
            {item}{" "}
            <input type="text" name={`${index}`} onChange={handleInputChange} />
          </p>
        )
      })}

      <button onClick={toggleShowAnswers}>
        {showAnswers ? "Hide Answers" : "Finish"}
      </button>
      {/* <section>
        <h1>Questions</h1>
        <ul>
          {questions.map((item, index) => (
            <li key={`ques_${index}`}>{item}</li>
          ))}
        </ul>
      </section> */}
      {/* <section>
        <h1>Inputs</h1>
        <ul>
          {userInputs.map((item, index) => (
            <li key={`usr_${index}`}>{item}</li>
          ))}
        </ul>
      </section> */}
      {showAnswers && (
        <section>
          <h1>Answers</h1>
          <ul>
            {answers.map((item, index) => {
              if (item === userInputs[index]) {
                return (
                  <li key={`ans_${index}`} style={{ color: "green" }}>
                    {item} ✔
                  </li>
                )
              }

              if (item.includes(userInputs[index])) {
                return (
                  <li key={`ans_${index}`}>
                    <span style={{ color: "green" }}>{item}</span>{" "}
                    {userInputs[index]}
                  </li>
                )
              }

              return (
                <li key={`ans_${index}`}>
                  {item}{" "}
                  <span style={{ color: "red" }}>{userInputs[index]}</span>
                </li>
              )
            })}
          </ul>
        </section>
      )}
    </section>
  )
}

export default Exam
