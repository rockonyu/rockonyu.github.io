import React, { Suspense } from "react"
const LazyQuiz = React.lazy(() => import("../components/quiz"))

function Quiz() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyQuiz />
    </Suspense>
  )
}

export default Quiz
