let ApiUrl = "http://jservice.io/";
let ApiQuestionData = { categories: [] };

async function getCategories() {
  let categoriesToDisplay = [];
  let results = await fetch(
    ApiUrl +
      `/api/categories?count=100&offset=${Math.floor(Math.random() * 2000)}`
  );
  let data = await results.json();
  let i = 0;

  while (categoriesToDisplay.length < 5) {
    if (data[i].clues_count >= 25) {
      categoriesToDisplay.push(data[i]);
    }
    i++;
  }

  categoriesToDisplay.map((category, i) => {
    ApiQuestionData.categories[i] = category;
  });
  return categoriesToDisplay;
}

const mapCatIdsToClues = async (categories) => {
  // categories.map(async (category, i) => {
  //   ApiQuestionData.categories[i].clues = await getClues(category.id);
  // });
  // categories.map((category) => {
  //   getClues(category.id);
  // });
  categories.map(async (category, i) => {
    ApiQuestionData.categories[i].clues = await getClues(category.id);
  });
};

async function getClues(id) {
  let results = await fetch(ApiUrl + `/api/clues?category=${id}`);
  let data = await results.json();
  let cluesToDisplay = [];
  let c100 = {};
  let c200 = {};
  let c300 = {};
  let c400 = {};
  let c500 = {};

  for (var i = 0; i < data.length; i++) {
    if (data[i].value === 100 && Object.keys(c100).length === 0) {
      c100 = data[i];
    }
    if (data[i].value === 200 && Object.keys(c200).length === 0) {
      c200 = data[i];
    }
    if (data[i].value === 300 && Object.keys(c300).length === 0) {
      c300 = data[i];
    }
    if (data[i].value === 400 && Object.keys(c400).length === 0) {
      c400 = data[i];
    }
    if (data[i].value === 500 && Object.keys(c500).length === 0) {
      c500 = data[i];
    }
  }
  cluesToDisplay.push(c100, c200, c300, c400, c500);

  return cluesToDisplay;
}

const generateData = async () => {
  await getCategories().then((categories) => {
    mapCatIdsToClues(categories);
  });
};

export const returnApiData = async () => {
  await generateData();
  return ApiQuestionData.categories;
};
