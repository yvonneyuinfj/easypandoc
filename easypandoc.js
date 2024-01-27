import {existsSync} from 'fs'
import {execa} from 'execa'

export async function convertFile({
  sourceType,
  sourceFilePath,
  targetType,
  targetFilePath,
}) {
  if (!existsSync(sourceFilePath)) {
    throw new Error('Source file does not exist')
  }

  const args = [
    '-f',
    sourceType,
    '-t',
    targetType,
    '-o',
    targetFilePath,
    sourceFilePath,
  ]

  try {
    await execa('pandoc', args)
    return targetFilePath
  } catch (error) {
    throw new Error(`Pandoc failed: ${error.message}`)
  }
}
