var Stack = function() {
    this._storage = {}
    this._counter=0

    this.add = function(value){
      this._storage[this._counter]=value
      this._counter++
    };
    
    this.remove = function() {
    	if(!this._counter===0){
    		this._counter--
    		var x= this._storage[this._counter]
    		delete this._storage[this._counter]
    		
    	}
    	return x
    };
    
  };
  var a = new Stack();