export default function progressivelyShowText() {
  return new Promise((res) => {
    let showStyle = (async function(){
      let style = this.fullStyle[n]
      if(!style) {return}
      let length = this.fullStyle.filter((_,i) => i<=n).map(item => item.length).reduce((p,c) => p+c)
      let prefixLength = length - style.length
      if(this.currentStyle.length < length) {
        let l = this.currentStyle.length - prefixLength
        let char = style.substring(l, l + 1) || ' '
        this.currentStyle += char
        if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
          this.$nextTick(() => {
            this.$refs.styleEditor.goBottom()
          })
        }
        setTimeout(showStyle, 15)
      }else{
        if(n === this.fullStyle.length - 1){
          this.onlyShowMarkdown = true
        }
        res()
      }
    }).bind(this)
    showStyle()
  })
}
