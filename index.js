function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML)
  Handlebars.registerHelper('displayIngredient', function () {
    return new Handlebars.SafeString(this.value)
  })
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function recipeFormTemplate() {
  var main = document.getElementsByTagName('main')[0]
  var action = "createRecipe();return false;"
  var template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML)
  var html = template({'action': action})
  main.innerHTML += html
}

function createRecipe() {
 var ingredients = document.getElementsByName("ingredients")
 var name = document.getElementById('name').value
 var description = document.getElementById('description').value

 var template = Handlebars.compile(document.getElementById('recipe-template').innerHTML)
 var html = template({'ingredients': ingredients, 'description': description, 'name': name})

 document.querySelector("main").innerHTML += html
}

function displayEditForm() {
  var template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML)
  var action = "updateRecipe();return false;"
  var html = template({'action': action})
  //document.querySelector("main").innerHTML += html
  document.getElementsByTagName('main')[0].innerHTML += html


}

function updateRecipe() {
  var ingredients = document.getElementsByName("ingredients")
  var name = document.getElementById('name').value
  var description = document.getElementById('description').value

  var template = Handlebars.compile(document.getElementById('recipe-template').innerHTML)
  var html = template({'ingredients': ingredients, 'description': description, 'name': name})
  document.getElementsByTagName('main')[0].innerHTML = html

}
