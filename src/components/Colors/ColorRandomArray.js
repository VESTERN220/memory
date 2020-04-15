const ColorRandomArray =()=> {
    let id = 0
    const colors = [
                    'Red',
                    'Black',
                    'Darkorange',
                    'Blue',
                    'Gold',
                    'Green',
                    'Magenta',
                    'Lime'
    ].reduce((acc, type) => {
        acc.push({
            id: id++,
            type
        })
        acc.push({
            id: id++,
            type
        })
        return acc
    }, [])

    const shuffle = (arr) => {
        let j, temp;
        for(let i = arr.length - 1; i > 0; i--){
            j = Math.floor(Math.random()*(i + 1));
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }

    let colorFullArray = shuffle(colors)
    return(
        colorFullArray
    );
}
export default ColorRandomArray