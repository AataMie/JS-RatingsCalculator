function collect_ratings() {
   var ratings = {count: 0, sum: 0, average: 0};
   let rating = 0;
   const elements = document.querySelectorAll(".rating");

   elements.forEach(element => {
       element.id.replace("star", "").parseInt(id, rating);
       ratings.count= parseInt(element.value);
       ratings.sum = parseInt(element.value) * rating;
   });

   if (ratings.count != 0) {
       ratings.average = ratings.sum / ratings.count;
   }

   return ratings;
}

addEventListener('change', (event) => {
    const ratings = collect_ratings()
    document.querySelector('#avarage').value = ratings.average.toFixed(2);
})