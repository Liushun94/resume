export default function waterFall (domArr, parent) {
    let img = domArr
    let imgWidth = img[0].offsetWidth
    let screenWidth = parent.offsetWidth
    let col = parseInt(screenWidth / imgWidth)
    let heightArr = []

    img.forEach((item, index) => {
        if (index < col) {
            heightArr[index] = item.offsetHeight
        } else {
            let minHeight = Math.min(...heightArr)
            let minHeightIndex = heightArr.indexOf(minHeight)
            item.style.position = 'absolute';
            item.style.left = minHeightIndex * imgWidth + "px";
            item.style.top = minHeight + "px";
            heightArr[minHeightIndex] += item.offsetHeight
        }
    });

    parent.style.minHeight = Math.max(...heightArr) + 'px'
}