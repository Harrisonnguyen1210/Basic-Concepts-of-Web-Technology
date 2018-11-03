// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = showImages;
xhttp.open('GET', 'images.json', true);
xhttp.send();
function showImages(){
    if (xhttp.readyState === 4 && xhttp.status === 200) {
        const data = JSON.parse(xhttp.responseText);
        for(let i = 0; i<data.length; i++){
            const ul = document.getElementsByTagName('ul');
            const li = document.createElement('li');
            const figure = document.createElement('figure');
            const a = document.createElement('a');
            a.setAttribute('href', `img/original/${data[i].mediaUrl}`);
            const img = document.createElement('img');
            img.setAttribute('src',`img/thumbs/${data[i].mediaThumb}`);
            const figcaption = document.createElement('figcaption');
            const h3 = document.createElement('h3');
            h3.innerText = `Picture ${i+1}`;
            ul[0].appendChild(li);
            li.appendChild(figure);
            figure.appendChild(a);
            figure.appendChild(figcaption);
            a.appendChild(img);
            figcaption.appendChild(h3);
        }
    }
}