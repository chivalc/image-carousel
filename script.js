let images;


images = ['https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg', 'https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4=', 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?q=10&h=200'];
let element_image = document.getElementById('image');
element_image.setAttribute("src", images[0]);


document.getElementById('next').addEventListener('click', (event) => {
  images.push(images[0]);
  images.shift();
  let element_image2 = document.getElementById('image');
  element_image2.setAttribute("src", images[0]);

});

document.getElementById('previous').addEventListener('click', (event) => {
  images.unshift(images[0]);
  images.pop();
  let element_image3 = document.getElementById('image');
  element_image3.setAttribute("src", images[0]);

});