import React, {useState, useCallback} from 'react'

type TestProps = {
  r?: number,
  g?: string
}

export const Test = (props: TestProps) => {
  const [ count, setCount ] = useState<number>(0)
  return (
    <React.Fragment>
      <button onClick={() => setCount(count + 1)}>Add One</button>
      <div>{count}</div>
      <Counter />
    </React.Fragment>
  )
}

type Initial = {
  initial?: number
}

function Counter ({ initial }: Initial) {
  const [counter, setCount] = useState(initial || 0);
  const increment = useCallback(() => setCount(counter + 1), [counter]);
  return (
    <div>
      {counter}
      <button onClick={increment}>Add one</button>
    </div>
  )
}
