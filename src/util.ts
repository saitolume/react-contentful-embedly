export const importFromCdn = (src: string) =>
  new Promise<void>(resolve => {
    const script = document.createElement('script')
    script.src = src
    script.type = 'text/javascript'
    script.charset = 'utf-8'
    script.onload = () => {
      resolve()
    }
    document.head.appendChild(script)
  })
