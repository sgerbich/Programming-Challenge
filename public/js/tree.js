getFactories();

function getFactories() {
    $.get('/getFactory', getFactoryList);
    
};

function getFactoryList(data) {
    
    for (var i = 0; i < data.length; i++) {

        $('#dynamicFactories').append(
            
        );
    }

}


function randomNum(lowerLim, upperLim) {
  min = Math.ceil(lowerLim);
  max = Math.floor(lowerLim);
  return Math.floor(Math.random() * (max - min)) + min
}
