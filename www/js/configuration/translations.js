angular.module("localeapp.translations", []).config(["$translateProvider", function($translateProvider) {
$translateProvider.translations("ar", {
  "categories": "الفئات",
  "choose_language": "إختر اللغة",
  "education_description": "",
  "education_title": "التعليم",
  "employment_description": "",
  "employment_title": "الشغل",
  "housing_description": "",
  "housing_title": "السكن",
  "information_description": "",
  "information_title": "معلومات",
  "interface_direction": "rtl",
  "label": "اللغة العربية",
  "language_description": "",
  "language_title": "لغات",
  "social_description": "",
  "social_title": "تواصل اجتماعي",
  "category": {
    "employment":"توظيف",
    "housing":"الإسكان",
    "coordination":"تنسيق",
    "information":"معلومات",
    "education":"التعليم",
    "language":"لغة",
    "social":"اجتماعي",
    "text":"نص",
  }
});

$translateProvider.translations("en", {
  "categories": "Categories",
  "choose_language": "Choose Language",
  "education_description": "",
  "education_title": "Education",
  "employment_description": "",
  "employment_title": "Employment",
  "housing_description": "",
  "housing_title": "Housing",
  "information_description": "",
  "information_title": "Information",
  "interface_direction": "ltr",
  "label": "English",
  "language_description": "",
  "language_title": "Language",
  "social_description": "",
  "social_title": "Social",
  "category": {
    "employment":"Employment",
    "housing":"Housing",
    "coordination":"Coordination",
    "information":"Information",
    "education":"Education",
    "language":"Language",
    "social":"Social",
    "text":"Text",
  }
});

$translateProvider.translations("fa", {
  "categories": "دسته بندی ها",
  "choose_language": "زبان را انتخاب کنید",
  "education_description": "",
  "education_title": "",
  "employment_description": "",
  "employment_title": "",
  "housing_description": "",
  "housing_title": "",
  "information_description": "",
  "information_title": "",
  "interface_direction": "rtl",
  "label": "زبان فارسي",
  "language_description": "",
  "language_title": "",
  "social_description": "",
  "social_title": "",
  "category": {
    "employment":"استخدام",
    "housing":"مسکن",
    "coordination":"هماهنگی",
    "information":"اطلاعات",
    "education":"تحصیلات",
    "language":"زبان",
    "social":"اجتماعی",
    "text":"متن",
  }
});

$translateProvider.translations("sv", {
  "categories": "Kategorier",
  "choose_language": "Välj Språk",
  "education_description": "",
  "education_title": "Utbildning",
  "employment_description": "Jobb beskrivning",
  "employment_title": "Arbete",
  "housing_description": "",
  "housing_title": "Boende",
  "information_description": "",
  "information_title": "Information",
  "interface_direction": "ltr",
  "label": "Svenska",
  "language_description": "",
  "language_title": "Språk",
  "social_description": "",
  "social_title": "Socialt",
  "category": {
    "employment":"Sysselsättning",
    "housing":"Hus",
    "coordination":"Samordning",
    "information":"Information",
    "education":"Utbildning",
    "language":"Språk",
    "social":"Social",
    "text":"Text",
  }
});
}]);
