buildmenu()

function buildmenu()
{
    let links = [
        ["Startsida", "index.html"],
        ["Kontakta oss", "contactus.html"],
        ["Produkter", "products.html"],
        ["Media", "media.html"]
    ]

    for(let i = 0; i < links.length; i++)
    {
        let listItem = document.createElement("li")
        let link = document.createElement("a")
        link.href = links[i][1]
        let text = document.createTextNode(links[i][0])
        link.appendChild(text)
        listItem.appendChild(link)
        document.getElementById("menu").appendChild(listItem)
    }
}

let price = 0;
function productchecked()
{
    
    if(document.getElementById("crane").checked)
    {
        price += 5999
    }
    if(document.getElementById("excavator").checked)
    {
        price += 22000
    }
    if(document.getElementById("truck").checked)
    {
        price += 8111
    }

    document.getElementById("price").textContent = price
}