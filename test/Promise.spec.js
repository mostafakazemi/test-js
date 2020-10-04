import axios from 'axios'
import { test } from '@jest/globals'

test('then axios test', () => {
  const url = 'https://blog.chamedoon.com/posts/?is_published_eq=true&_sort=published_at:DESC&_start=11&_limit=3'
  return axios.get(url).then(({ data }) => {
    expect(data[0].id).toBe(89)
  })
})

test('resolve', () => {
  const promise = new Promise(resolve => resolve('done'))
  return expect(promise).resolves.toBe('done')
})

test('reject', () => {
  let a = 1
  const b = 5
  a += 1
  const promise = new Promise((resolve, reject) => {
    if (a > b) {
      resolve('done')
    } else {
      reject(new Error('fail'))
    }
  })
  return expect(promise).rejects.toThrow('fail')
})
