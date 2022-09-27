type MonkeyWindow =  Window & typeof globalThis &{
    pageWidth: number,
    pageHeight: number,
}
const {pageWidth} =  window as MonkeyWindow

function px(n) {
    return n / 1725 * pageWidth;
}
export default px