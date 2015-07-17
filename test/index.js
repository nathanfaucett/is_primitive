var tape = require("tape"),
    isPrimitive = require("../src/index");


tape("isPrimitive(value: Any) should return true when the value is a primitive", function(assert) {
    assert.equal(isPrimitive({}), false);
    assert.equal(isPrimitive([]), false);
    assert.equal(isPrimitive(/./), false);
    assert.equal(isPrimitive(function noop() {}), false);
    assert.equal(isPrimitive(""), true);
    assert.equal(isPrimitive(0), true);
    assert.equal(isPrimitive(undefined), true);
    if (typeof(Symbol) !== "undefined") {
        assert.equal(isPrimitive(Symbol("key")), true);
    }
    assert.equal(isPrimitive(undefined), true);
    assert.equal(isPrimitive(null), true);
    assert.end();
});
