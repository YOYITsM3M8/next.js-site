import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'images')

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.png$/, '')
      }
    }
  })
}

export async function getImage(id) {
  const fullPath = path.join(postsDirectory, `${id}.img`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Combine the data with the id and contentHtml
  return {
    fullPath
  }
}
