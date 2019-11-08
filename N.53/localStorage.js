"use strict"

		function LocStorage(keys) {
			var self = this;
			self.storage={};

			if(localStorage[keys]){
				self.storage = JSON.parse(localStorage[keys]);
			}

			self.addValue=function(key, value ){
				self.storage[key]=value;
				localStorage[keys] = JSON.stringify(self.storage);
			}

			self.getValue=function(key) {
				return self.storage[key];
			}

			self.deleteValue=function(key) {
				if (key in self.storage) {
					delete self.storage[key];
					localStorage[keys] = JSON.stringify(self.storage);
					return true;
				}
				else {
					return false;
				}
			}

			self.getKey=function() {
				return Object.keys(self.storage);
			}

		}