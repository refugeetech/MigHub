angular.module("localeapp.translations", []).config(["$translateProvider", function($translateProvider) {
$translateProvider.translations("ar", {
  "categories": " ",
  "category_social": "Soc",
  "choose_language": " ",
  "employment_description": {
    "interface_direction": "rtl",
    "label": "اللغة العربية"
  }
});

$translateProvider.translations("en", {
  "categories": "Categories",
  "category_social": "Social",
  "choose_language": "Choose Language",
  "employment_description": "Employment description",
  "interface_direction": "ltr",
  "label": "English"
});

$translateProvider.translations("fa", {
  "categories": " ",
  "category_social": "Soc",
  "choose_language": " ",
  "employment_description": {
    "interface_direction": "rtl",
    "label": "زبان فارسي"
  }
});

$translateProvider.translations("sv", {
  "categories": "Kategorier",
  "category_social": "Socialt",
  "choose_language": "Välj Språk",
  "employment_description": "Jobb beskrivning",
  "interface_direction": "ltr",
  "label": "Svenska"
});
}]);
