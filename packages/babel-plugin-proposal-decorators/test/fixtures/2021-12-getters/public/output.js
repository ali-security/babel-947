var _initProto;
const dec = () => {};
class Foo {
  static {
    [_initProto] = babelHelpers.applyDecs(this, [[dec, 3, "a"], [dec, 3, 'b']], []);
  }
  constructor() {
    _initProto(this);
  }
  value = 1;
  get a() {
    return this.value;
  }
  get ['b']() {
    return this.value;
  }
}
