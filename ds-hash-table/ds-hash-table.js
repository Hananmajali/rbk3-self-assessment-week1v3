var makeHashTable = function() {
  //Do not change the max!
  var max = 4;


    return {
      _storage: [],
      _values: {}
      _counter:0

      retrieve: function(key) {
        return this._storage[hashFn(key, 4)];
      },

      insert: function(key, value) {
        //your code is here
        this._storage[hashFn(key, 4)] = value;
        var bucket = this._storage[index]
    
       if (!bucket) {
    //create the bucket
    var bucket = [];
    //insert bucket into our hashTable
    this._storage[index] = bucket;
  }

  var override = false;
 
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === key) {
      //overide value stored at this key
      tuple[1] = value;
      override = true;
    }
  }

  if (!override) {
    bucket.push([key, value]);
    this._count++
      if (this._count > 4 * 0.75) {
        this.resize(4 * 2);
      }
  }
  return this;
};



    }

  };



// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};

// am was just trying some thing 
// you can consider that I dont have enough time to cover hash tables 

insert = function(key, value) {
  var hash = key.toString().length % 4
  if(!this.values.hasOwnProperty(hash)) {
    this.values[hash] = {};
  }
  //if(!this.values[hash].hasOwnProperty(key)) {
    //this._counter++;
  }
  this.values[hash][key] = value;
};



