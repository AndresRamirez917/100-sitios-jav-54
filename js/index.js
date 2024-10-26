async function getData() {
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    console.log(products);
    const productsArr = products.map(elemento => Object.entries(elemento));
    console.log(productsArr)
    const productsArrSliced = productsArr.slice(0,5);
    products.forEach(element => {
        const randomData = (min, max) => Math.floor(Math.random() * (min - max + 1) + max);
        const randInt = randomData(1, productsArr.length);
        const randIndex = randInt;
        for(i = 0; i < productsArrSliced.length; i++){
            if(element.id == i){
                const grid_box = document.createRange().createContextualFragment(`
                    
            <div class="grid-box grid-box-${i}">
                <div class="overlay overlay-${i}">
                    <div class="image"> 
                        <img src="${productsArr[randIndex][5][1]}">
                    </div>
                    <h4>Magna</h4>
                    <p >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, perspiciatis? Sed maxime fugiat ea itaque
                        aut aliquid natus sapiente numquam, totam recusandae consectetur placeat quibusdam?
                    </p>
                    <a href="project-1.html" class="btn button-1">Learn More</a>
                </div>
            </div>
                    
                    
                    `)
                    const camaras = document.getElementById('cameras');
                    camaras.append(grid_box)
            }
        }
    });
}

getData()