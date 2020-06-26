import React, { useEffect, useRef, useState, FC } from "react"

type Props = {
  today: string
}

const Editor: FC<Props> = ({ today }) => {
  const [items, setItems] = useState<Array<string[]>>([])

  useEffect(() => {
    if (items.length === 0) {
      const defaultItems = JSON.parse(localStorage.getItem(today) || "[]")
      setItems(defaultItems)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [today])

  const inputElm1 = useRef<HTMLInputElement>(null)
  const inputElm2 = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (inputElm1.current?.value && inputElm2.current?.value) {
      const { value: value1 } = inputElm1.current
      const { value: value2 } = inputElm2.current
      setItems(prev => {
        const targetItems = [...prev, [value1, value2]]

        localStorage.setItem(today, JSON.stringify(targetItems))

        return targetItems
      })
      inputElm1.current.value = ""
      inputElm2.current.value = ""

      inputElm1.current.focus()
    }
  }

  const handleClear = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (window.confirm("delete all?")) {
      setItems([])
      localStorage.clear()
    }
  }

  const handleDeleteItem = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    const { itemindex } = event.currentTarget.dataset
    if (itemindex) {
      setItems(prev => {
        const newItems = [...prev]
        newItems.splice(+itemindex, 1)
        return newItems
      })
    }
  }

  //   const handleEditItem = (event: React.FormEvent<HTMLSpanElement>) => {
  //     const value = event.currentTarget.textContent || "";
  //     const { itemindex } = event.currentTarget.dataset;
  // if (itemindex) {
  //   setItems((prev) => {
  //     const newItems = [...prev];
  //     newItems[+itemindex][0] = value;
  //     return newItems;
  //   });
  // }
  //   };

  return (
    <div className="App">
      <header className="App-header">
        <section className="flex">
          <form className="my-form" onSubmit={handleSubmit}>
            <input ref={inputElm1} type="text" />
            <br />
            <input ref={inputElm2} type="text" />
            <br />
            <button type="submit">Submit</button>
          </form>
          <section className="items">
            <ul>
              {items.map((item, index) => (
                <li key={`item_${index}`}>
                  <span data-itemindex={index}>{item[0]}</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                    role="img"
                    aria-label="delete item"
                    onClick={handleDeleteItem}
                    data-itemindex={index}
                  >
                    ❌
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </header>
      <button type="button" onClick={handleClear}>
        Clear
      </button>
    </div>
  )
}

export default Editor
