angular.module("starter", []).config(["$translateProvider", function($translateProvider) {

  console.log('set translateProvider')
$translateProvider.translations("ar", {
  "categories": " ",
  "category_social": "Soc",
  "choose_language": " ",
  "interface_direction": "rtl",
  "label": "اللغة العربية"
});

$translateProvider.translations("en", {
  "categories": "Categories",
  "category_social": "Social",
  "choose_language": "Choose Language",
  "interface_direction": "ltr",
  "label": "English"
});

$translateProvider.translations("fa", {
  "categories": " ",
  "category_social": "Soc",
  "choose_language": " ",
  "interface_direction": "rtl",
  "label": "زبان فارسي"
});

$translateProvider.translations("sv", {
  "categories": "Kategorier",
  "category_social": {
    "choose_language": "Välj Språk",
    "interface_direction": {}
  }
});
}]);
