import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import Todo from './Todo'

describe('Todo', () => {
  let todo, onClickComplete, onClickDelete, component

  beforeEach(() => {
    todo = {
      text: 'Test todo',
      done: false,
    }

    onClickComplete = jest.fn()
    onClickDelete = jest.fn()

    component = render(
      <Todo
        {...{
          todo,
          onClickComplete,
          onClickDelete,
        }}
      />
    )
  })

  test('Should render text', () => {
    expect(component.container).toHaveTextContent(todo.text)
  })

  test('Should render both buttons', () => {
    const buttons = component.queryAllByRole('button')
    expect(buttons).toHaveLength(2)
  })
})
