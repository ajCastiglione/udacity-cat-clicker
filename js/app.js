$(function() {

  const catSelect = $('#catSelection');
  const chosenCat = $('#selectedCat');
  const menu = $('.menu-title span');

  menu.on('click', () => {
    catSelect.slideToggle(500);
  });

  let cats = [{
    name: 'Ashes',
    url: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
    clicks: 0
  }, {
    name: 'Tiger',
    url: 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
    clicks: 0
  }, {
    name: 'Puss',
    url: 'https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454',
    clicks: 0
  }, {
    name: 'Smokey',
    url: 'https://static.pexels.com/photos/20787/pexels-photo.jpg',
    clicks: 0
  }, {
    name: 'Misty',
    url: 'https://static.pexels.com/photos/177809/pexels-photo-177809.jpeg',
    clicks: 0
  }];

  // Populates feed with a selection of cats
  for (let i = 0; i < cats.length; i++) {
    catSelect.append("<div class='catChoice'><p id='" + i + "'>" + cats[i].name + "</p><br>" + "<img src='" + cats[i].url + "'></div>");
  }

  // Once a cat is clicked: get the index, populate the chosenCat section with the selected cat, if mobile - slide menu up once a cat is selected.
  catSelect.on('click', 'div', function() {
    let catIndex = $(this).children('p').attr('id');
    chosenCat.html("<div class='selectedKitty'><h3 class='cat-title' id='" + catIndex + "'>" + cats[catIndex].name + "</h3><img src='" + cats[catIndex].url + "'><p class='clickCounter'>" + cats[catIndex].clicks + "</div>");
    if($(window).width() < 768) {
      catSelect.slideToggle(500);
    }
  });

  // Once the chosenCat is clicked: get the index, add 1 to the click counter, update the clicks on the screen.
  chosenCat.on('click', 'div', function() {
    let clickIndex = $(this).children('h3').attr('id');
    cats[clickIndex].clicks += 1;
    $(this).children('p').html(cats[clickIndex].clicks);
  });

});
