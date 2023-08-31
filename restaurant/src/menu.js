
export function createMenuPageContent()
{ 
    const main = document.querySelector('.main');

    let menudiv = document.createElement('div');
    menudiv.classList.add('menudiv');

    const menuItems = [
        {
          name: 'Margherita Pizza',
          ingredients: 'Tomato, Mozzarella, Basil',
          imgSrc: 'chef.png',
        },
        {
            name: 'PeePEePoo Pizza',
            ingredients: 'Tomato, Mozzarella, Basil',
            imgSrc: 'chef.png',
          },
          {
            name: 'Margherita Pizza',
            ingredients: 'Tomato, Mozzarella, Basil',
            imgSrc: 'chef.png',
          },
          {
            name: 'Margherita Pizza',
            ingredients: 'Tomato, Mozzarella, Basil',
            imgSrc: 'chef.png',
          },
          {
            name: 'Margherita Pizza',
            ingredients: 'Tomato, Mozzarella, Basil',
            imgSrc: 'chef.png',
          },
          {
            name: 'Margherita Pizza',
            ingredients: 'Tomato, Mozzarella, Basil',
            imgSrc: 'chef.png',
          }
        
      ];

      menuItems.forEach(function(item)
      {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const img = document.createElement('img');
        img.src = item.imgSrc;

        const name = document.createElement('h3');
        name.textContent = item.name;

        const ingredients = document.createElement('p');
        ingredients.textContent = item.ingredients;

        menuItem.appendChild(img);
        menuItem.appendChild(name);
        menuItem.appendChild(ingredients);

        menudiv.appendChild(menuItem);
      });

    main.appendChild(menudiv);

}