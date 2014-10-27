(function(exports) {
  "use strict";

  function Cow(name) {
    this.name = name || "Betsy the Cow";
  }
  exports.Cow = Cow;

  Cow.prototype = {
    greets: function(target) {
      if (!target)
        throw new Error("missing target");
      return this.name + " greets " + target;
    },

    lateGreets: function(target, callback) {
      setTimeout(function(self) {
        try {
          callback(null, self.greets(target));
        } catch (err) {
          callback(err);
        }
      }, 1000, this);
    }
  };
})(this);