const renderer = new Renderer();
const ApiManger = new APIManager();

ApiManger.dataForAll()
.then (() => {
  renderer.renderAll(ApiManger.data)
})


const showAll = function(){
 ApiManger.dataForAll()
 .then(() => {
  renderer.renderAll(ApiManger.data)

 })

}

