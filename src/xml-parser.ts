import { decodeXML } from 'entities'
import { Parser } from 'xml2js'
import { firstCharLowerCase } from 'xml2js/lib/processors'
import { removePrefix } from './normalize'

const options = {
  trim: true,
  explicitArray: false,
  emptyTag: null,
  tagNameProcessors: [removePrefix('praw_'), firstCharLowerCase],
}

const parser = new Parser(options)

export async function xml2json(xml: string) {
  return parser.parseStringPromise(decodeXML(xml))
}
