import { useEffect, useState } from 'react'
import Container from './Container'

const QUOTES_URL =
  'https://raw.githubusercontent.com/daviferreira/defprogramming.com/master/src/data/quotes.json'

const Footer = () => {
  const [quote, setQuote] = useState<{
    body: string
    authors: string[]
  }>()

  useEffect(() => {
    const fetchQuotes = async () => {
      const quotes = await (await fetch(QUOTES_URL)).json()

      const randomIndex = Math.min(
        Math.floor(Math.random() * quotes.length),
        quotes.length - 1,
      )
      setQuote(quotes[randomIndex])
    }

    fetchQuotes()
  }, [])

  return (
    <footer className="bg-accent-1 border-t border-accent-2 dark:bg-accent-8">
      <Container>
        <div className="py-16 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4">
            {quote && (
              <>
                "{quote.body}"
                <br />
                <br />- {quote.authors.join(', ')}
              </>
            )}
          </h3>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
