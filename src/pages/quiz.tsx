import React, { Suspense } from "react"
const LazyQuiz = React.lazy(() => import("../components/quiz"))

function Quiz() {
  const isSSR = typeof window === "undefined"
  return (
    <>
      {!isSSR && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyQuiz />
        </Suspense>
      )}
    </>
  )
}

export default Quiz
