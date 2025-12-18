const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggle")

menuBtn.addEventListener('click', () => {
    sideMenu.style.display= 'block';
})

closeBtn.addEventListener("click", () => {
    sideMenu.style.display='none';
})

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables')

    themeToggler.querySelector('span').classList.toggle('active');
})


// fill order in table.
orders.forEach(order =>{
    const  tr = document.createElement('tr');
    const trContent = `
                    <tr>
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'pending' ? 'warning' : 'primary' }">
                        ${order.shipping}
                        </td>
                        <td class="primary">Details</td>
                    </tr>`;
                    tr.innerHTML = trContent;
                    document.querySelector('table tbody').appendChild(tr);
})