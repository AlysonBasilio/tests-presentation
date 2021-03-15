import { writeFileSync, readFileSync, unlinkSync } from 'fs'

export default class FileClient {
  writeLine(sentence: string, path: string = './file.txt'): void {
    writeFileSync(path, sentence)
  }

  readFile(path: string = './file.txt'): string {
    return readFileSync(path).toString()
  }

  deleteFile(path: string = './file.txt'): void {
    unlinkSync(path)
  }
}