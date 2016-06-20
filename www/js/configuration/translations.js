angular.module("localeapp.translations", []).config(["$translateProvider", function($translateProvider) {
$translateProvider.translations("ar", {
  "categories": "الفئات",
  "choose_language": "إختر اللغة",
  "education_description": null,
  "education_title": "التعليم",
  "employment_description": null,
  "employment_title": "الشغل",
  "housing_description": null,
  "housing_title": "السكن",
  "information_description": null,
  "information_title": "معلومات",
  "interface_direction": "rtl",
  "label": "اللغة العربية",
  "language_description": null,
  "language_title": "لغات",
  "social_description": null,
  "social_title": "تواصل اجتماعي"
});

$translateProvider.translations("en", {
  "categories": "Categories",
  "choose_language": "Choose Language",
  "education_description": null,
  "education_title": "Education",
  "employment_description": null,
  "employment_title": "Employment",
  "housing_description": null,
  "housing_title": "Housing",
  "information_description": null,
  "information_title": "Information",
  "interface_direction": "ltr",
  "label": "English",
  "language_description": null,
  "language_title": "Language",
  "social_description": null,
  "social_title": "Social"
});

$translateProvider.translations("fa", {
  "categories": " ",
  "choose_language": " ",
  "education_description": null,
  "education_title": null,
  "employment_description": null,
  "employment_title": null,
  "housing_description": null,
  "housing_title": null,
  "information_description": null,
  "information_title": null,
  "interface_direction": "rtl",
  "label": "زبان فارسي",
  "language_description": null,
  "language_title": null,
  "social_description": null,
  "social_title": null
});

$translateProvider.translations("sv", {
  "categories": "Kategorier",
  "choose_language": "Välj Språk",
  "education_description": null,
  "education_title": "Utbildning",
  "employment_description": "Jobb beskrivning",
  "employment_title": "Arbete",
  "housing_description": null,
  "housing_title": "Boende",
  "information_description": null,
  "information_title": "Information",
  "interface_direction": "ltr",
  "label": "Svenska",
  "language_description": null,
  "language_title": "Språk",
  "social_description": null,
  "social_title": "Socialt"
});
}]);
