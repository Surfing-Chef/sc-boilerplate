"use strict";

function f() {
  {
    var x;
    {
      // this is ok since it's a block scoped name
      var x = "sneaky";
    }
    // this is ok since it was declared with `let`
    x = "bar";
  }
}

//# sourceMappingURL=script.js.map