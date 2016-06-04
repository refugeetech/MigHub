angular.module("starter", []).config(["$translateProvider", function($translateProvider) {
$translateProvider.translations("ar", {
  "category_social": "Soc"
});

$translateProvider.translations("en", {
  "category_social": "Social"
});

$translateProvider.translations("fa", {
  "category_social": "Soc",
  "interface_direction": "rtl",
  "label'": "زبان فارسي"
});
}]);
