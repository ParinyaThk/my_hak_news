// export
// func
// domain url
// url
export function domainUrl (url) {
  // const
  // domain
  // url split
  // then get the uri, not domain
  const domain = url.split(/^https?:\/\/([^\/?#]+)(?:[\/?#]|$)/)[1]
  return domain || 'n/a'
}
