// form testing
// http://localhost:3000/login

import * as React from 'react'
import {getByLabelText, render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'
import faker from 'faker'

const buildLoginForm = () => ({
  username: faker.internet.userName(),
  password: faker.internet.password(),
})

test('submitting the form calls onSubmit with username and password', async () => {
  // 🐨 create a variable called "submittedData" and a handleSubmit function that
  // accepts the data and assigns submittedData to the data that was submitted
  // 💰 if you need a hand, here's what the handleSubmit function should do:
  // const handleSubmit = data => (submittedData = data)
  //
  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  //
  // 🐨 get the username and password fields via `getByLabelText`
  // 🐨 use `await userEvent.type...` to change the username and password fields to
  //    whatever you want
  //
  // 🐨 click on the button with the text "Submit"
  //
  // assert that submittedData is correct
  // 💰 use `toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue
  let submittedData
  const mockFn = jest.fn()
  const handleSubmit = data => {
    submittedData = data
    mockFn(data)
  }
  const {username, password} = buildLoginForm()
  const {getByLabelText, getByText} = render(<Login onSubmit={handleSubmit} />)
  await userEvent.type(getByLabelText('Username'), username)
  await userEvent.type(getByLabelText('Password'), password)
  await userEvent.click(getByText('Submit'))
  expect(submittedData).toEqual({username, password})
  expect(mockFn).toHaveBeenCalledWith({username, password})
})

/*
eslint
  no-unused-vars: "off",
*/
