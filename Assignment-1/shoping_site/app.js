let input = document.getElementById('input');
let container = document.getElementById('container');



async function mohammed(){
    value = input.value.toLowerCase()
    let result = await fetch('https://dummyjson.com/products')
    let result1 = await result.json();
    let result2 = result1.products;
    result2.map((m)=>{
        console.log(m)
        container.innerHTML += `
        <div class="product-card">
      <img src="${m.images[0]}" alt="${m.title}">
      <h2>${m.title}</h2>
      <h3 class="category">${m.category}</h3>
      <h4>${m.description.slice(0, 30)}...</h4>
      <h3 class="price">$${m.price}</h3>
      </div>
          `;
    })
  }mohammed()


input.addEventListener('input',async function mohammed(){
  value = input.value.toLowerCase()
  let result = await fetch('https://dummyjson.com/products')
  let result1 = await result.json();
  let result2 = result1.products;
  container.innerHTML = "";
  result2
  .filter((product)=>{
    return product.title.toLowerCase().includes(value)
    })
    .map((m)=>{
      console.log(m)
      container.innerHTML += `
      <div class="product-card">
    <img src="${m.images[0]}" alt="${m.title}">
    <h2>${m.title}</h2>
    <h3 class="category">${m.category}</h3>
    <h4>${m.description.slice(0, 30)}...</h4>
    <h3 class="price">$${m.price}</h3>
    </div>
        `;
  })
})
