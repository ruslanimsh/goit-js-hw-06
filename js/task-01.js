const totalCategories = document.querySelectorAll("li.item");
console.log(`Кількість категорій: ${totalCategories.length}`);

const categoriesArray = [...totalCategories]
  .map(
    (categories) => `Категорія: ${categories.children[0].textContent}
Кількість елементів: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);
