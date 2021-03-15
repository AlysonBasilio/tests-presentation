/**
 * @jest-environment node
 */
import FileClient from './FileClient'

test('should write, read and delete a file', async () => {
  const fileClient = new FileClient()
  const line = 'Writing test'
  fileClient.writeLine(line)

  let fileContent = fileClient.readFile()
  expect(fileContent).toEqual(line)

  fileClient.deleteFile()

  expect(() => fileClient.readFile()).toThrow()
  expect(() => fileClient.readFile()).toThrowError(new Error("ENOENT: no such file or directory, open './file.txt'"))
})